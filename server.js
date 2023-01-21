// 1. buat folder project
// 2. ketik "npm init" dienter sampai keluar package.json

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

let port = process.env.PORT || 8080

let data = {
    temperature:"0",
    pressure:"0",
    humidity:"0"
}

app.get('/', function (req, res) {
    res.send({
        getData:"/get-data"
    })
  })
  

app.get('/get-data', function (req, res) {
  res.send(data)
})

app.get('/set-temperature/:temperature', function (req, res) {
    data = {
        ...data,
        temperature:req.params.temperature
      }
    res.send(data)
  })

  app.get('/set-pressure/:pressure', function (req, res) {
    data = {
        ...data,
        pressure:req.params.pressure
      }
    res.send(data)
  })

  app.get('/set-humidity/:humidity', function (req, res) {
    data = {
        ...data,
        humidity:req.params.humidity
      }
    res.send(data)
  })

app.listen(port)