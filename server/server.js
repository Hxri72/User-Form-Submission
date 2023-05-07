const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');

require('./dbConfig/dbConfig')
app.use(express.json())
app.use(bodyParser.json());

const appRoute = require('./routes/appRoute')

app.use(cors())

app.use('/home',appRoute)


app.listen(5000,()=>{
    console.log('server is running')
})