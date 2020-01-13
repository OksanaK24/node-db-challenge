const express = require("express")
const projectModel = require("./projects-model")

const router = express.Router()


router.get("/", async (req, res, next) => {
  try {
    res.json(await projectModel.find())
  } catch(err) {
    next(err)
  }
})


router.post("/", async (req, res, next) => {
  try {
    const newProject = await projectModel.add(req.body)
    res.status(201).json(newProject)
  } catch(err) {
    next(err)
  }
})

module.exports = router