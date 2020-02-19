const express = require("express")
const shoutsModel = require("./shouts-model")

const router = express.Router()

router.get("/", (req, res, next) => {
	shoutsModel.find()
		.then((data) => res.status(200).json(data))
		.catch((err) => next(err))
})

router.get("/:id", (req, res, next) => {
	shoutsModel.findById(req.params.id)
		.then((data) => res.status(200).json(data))
		.catch((err) => next(err))
})

router.post("/", (req, res, next) => {
	shoutsModel.add(req.body)
		.then((data) => res.status(201).json(data))
		.catch((err) => next(err))
})

module.exports = router
