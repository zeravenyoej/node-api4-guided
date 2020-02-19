const db = require("../data/config")

module.exports = {
	find,
	findById,
	add,
}

function find() {
	return db("shouts")
}

function findById(id) {
	return db("shouts")
		.where({ id })
		.first()
}

function add(shout) {
	return db("shouts")
		.insert(shout, "id")
		.then(([id]) => findById(id))
}
