const express = require("express")
const projectModel = require("./tasks-model")


const router = express.Router()


router.get("/", async (req, res, next) => {
  try {
    res.json(await projectModel.find())
  } catch(err) {
    next(err)
  }
})

module.exports = router