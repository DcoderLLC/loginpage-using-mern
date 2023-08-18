//here we write our api code...
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./modals/employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee")

app.post('/registor', (req, res) =>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () =>{
    console.log("Server is Running")
})