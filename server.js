const express = require('express')
const app = express()
require("dotenv").config()
const dbConfig = require("./config/dbConfig")

const portfolioRouter = require('./routes/portfolioRoute')

app.use(express.json())
app.use('/api/portfolio', portfolioRouter)

const port = process.env.port || 5000
app.listen(port, ()=>{
  console.log('Server running')
}
)