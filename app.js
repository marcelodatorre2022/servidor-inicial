
const express = require('express')
const { ppid } = require('process')
const app = express()
app.get('/',function(re,res){
    res.send('hola mundo')
})
app.listen(3000)
