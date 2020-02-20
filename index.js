//require("dotenv").config()
//Above is a an optional way of having the project read the
//dotenv, but an alternative is being used in the scripts watch in the package.json
const express = require("express")
const helmet = require("helmet")
const welcomeRouter = require("./welcome/welcome-router")
const shoutsRouter = require("./shouts/shouts-router")

const server = express()
const port = process.env.PORT || 4000

server.use(helmet())
server.use(express.json())
server.use("/", welcomeRouter)
server.use("/shouts", shoutsRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
