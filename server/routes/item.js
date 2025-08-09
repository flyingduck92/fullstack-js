const { ItemController } = require("../controllers")
const itemRouter = require("express").Router()

itemRouter.get("/", ItemController.getItems)
itemRouter.post("/add", ItemController.add)
itemRouter.delete("/delete/:id", ItemController.delete)
itemRouter.put("/edit/:id", ItemController.edit)
itemRouter.get("/search", ItemController.search)
itemRouter.get("/details/:id", ItemController.getItemById)

module.exports = itemRouter