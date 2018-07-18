const Employee = require('./employee');
const express = require('express');
// waxan kusoo darsaneenaa body-parser
const bodyParser = require('body-parser')
//adding hbs template engine
const hbs = require('hbs');
const app = express();

// body-parser midleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// setting hbs midleware
app.set('view engine', 'hbs')

// registring partials
hbs.registerPartials( __dirname + '/views/partials')
// hbs.registerPartial('views/partials')

app.use(express.static(__dirname + '/public'))

app.get('/',(req, res)=>{
    // console.log('we get a new client')
    // res.send(Employee.addEmployee('Ali farah yalaxow','cleaner','male'))

    // res.sendfile('./public/hom.html')
    res.sendFile( __dirname+'/public/hom.html')
})

app.post('/',(req,res)=>{
    // console.log(req.body)
    // saving emplyee
    Employee.addEmployee(req.body.fName,req.body.Title,req.body.Gender)
    // saving list of employee as an array 
    var AllEmpList = Employee.readAllEmployee();

    //reading All employees after post or saving a new employee
    res.render('home',{AllEmpList})
})

app.get('/hbs',(req,res)=>{
   var AllEmpList = Employee.readAllEmployee();
    res.render('home',{AllEmpList})
})

app.listen(3000,()=>{
    console.log('the server started at port 3000')
})
// Employee.addEmployee("Haawo Aadan Ali","Manager","female")