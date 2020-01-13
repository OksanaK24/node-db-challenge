const express = require("express")
const projectModel = require("./tasks-model")

const router = express.Router({
	mergeParams: true,
})

router.get("/", async (req, res, next) => {
  try {
    const { id } = req.params
    const tasks = await projectModel.findByProject(id)
    res.json(tasks)
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