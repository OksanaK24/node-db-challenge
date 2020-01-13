const express = require("express")
const resourceModel = require("./resouces-model")

const router = express.Router()


router.get("/", async (req, res, next) => {
  try {
    res.json(await resourceModel.find())
  } catch(err) {
    next(err)
  }
})


router.post("/", async (req, res, next) => {
  try {
    const newResource = await resourceModel.add(req.body)
    res.status(201).json(newResource)
  } catch(err) {
    next(err)
  }
})

module.exports = router