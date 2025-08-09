const { Op } = require("sequelize")
const { Profile } = require("../models")

class ProfileController {
  static async getProfiles(req, res) {
    try {
      let results = await Profile.findAll()
      res.status(200).json(results)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async getProfileById(req, res) {
    try {
      const id = +req.params.id
      let result = await Profile.findOne({
        where: { id },
      })
      res.status(200).json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async add(req, res) {
    try {
      const { fullname, role, address } = req.body
      let result = await Profile.create({
        fullname, role, address
      })
      res.status(201).json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id
      let result = await Profile.destroy({
        where: { id },
      })
      res.status(200).json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  static async edit(req, res) {
    try {
      const id = +req.params.id
      const { fullname, role, address } = req.body
      let result = await Profile.update(
        { fullname, role, address },
        { where: { id } }
      )
      res.status(201).json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  static async search(req, res) {
    try {
      const searchQuery = req.query.name
      let result = await Profile.findAll({
        where: {
          name: {
            [Op.iLike]: `%${searchQuery}%`,
          },
        },
      })
      res.status(200).json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

module.exports = ProfileController