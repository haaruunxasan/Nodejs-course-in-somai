const Employee = require('./employee');
const express = require('express');
// waxan kusoo darsaneenaa body-parser
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))

app.get('/',(req, res)=>{
    // console.log('we get a new client')
    // res.send(Employee.addEmployee('Ali farah yalaxow','cleaner','male'))

    res.sendfile('./public/hom.html')
})

app.post('/',(req,res)=>{
    console.log(req.body.Title)
})

app.get('/nagusabsan',(req,res)=>{
    console.log('URL: '+req.url + ' ' + req.method)
    res.sendfile('./public/about.html')
})

app.listen(3000,()=>{
    console.log('the server started at port 3000')
})
// Employee.addEmployee("Haawo Aadan Ali","Manager","female")