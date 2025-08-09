const { Op } = require("sequelize")
const { User, Profile } = require("../models")

class UserController {
  static async getUsers(req, res) {
    try {
      let result = await User.findAll()
      res.status(200).json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async getUserById(req, res) {
    try {
      const id = +req.params.id
      let result = await User.findOne({
        where: { id },
      })
      res.status(200).json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  static async add(req, res) {
    try {
      const { email, password, username, image } = req.body

      let profile = await Profile.create()
      let result = await User.create({
        email,
        password,
        username,
        image,
        ProfileId: profile.id
      })
      res.status(201).json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id
      let result = await User.destroy({
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
      const { email, password, username, image } = req.body
      let result = await User.update(
        {
          email,
          password,
          username,
          image,
        },
        {
          where: { id },
        }
      )
      res.status(201).json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  static async search(req, res) {
    try {
      const searchQuery = req.query.name
      let result = await User.findAll({
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

module.exports = UserController