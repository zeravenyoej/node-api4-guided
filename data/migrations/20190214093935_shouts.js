exports.up = async function(knex) {
	await knex.schema.createTable("shouts", (tbl) => {
		tbl.increments()
		tbl.string("message").notNullable()
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("shouts")
}
