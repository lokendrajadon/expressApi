const express = require('express')
const app = express()
const fs = require('fs')
const port = 8080

app.get('/', (req,res)=>{
    console.log(`please use the other URL's /student/studentList`)
    res.send(`please use the other URL's /student/studentList`)
})

app.get('/student/studentList', (req,res)=>{
    fs.readFile('data.json',(err,data)=>{
        if (err) throw err;
        let studentData = JSON.parse(data);
        res.json(studentData);
    })
})

app.listen(port, (req,res)=>{
    console.log(`app is running on this ${port}`)
})