const fs = require('fs')

var addEmployee = (empName, empTitle, empGender) => {
    //creating Employee Array
    var employeeArray = [];

    //new Employee object
    var newEmployee = {
        empName,
        empGender,
        empTitle
    };
    // reading old employees
    var duplicatemployee=[];
    try {
        var oldEmplyee = fs.readFileSync('AllEmployee.json')
        employeeArray = JSON.parse(oldEmplyee)

        oldEmplyee = JSON.parse(oldEmplyee)
         duplicatemployee = oldEmplyee.filter((eachemployee) => {
            return eachemployee.empName === newEmployee.empName;
        })
    

    } catch (error) {

    }

    // seacching duplicate employee
   
    // adding new employee
    if (duplicatemployee.length === 0) {
        employeeArray.push(newEmployee)
        //saving old and new employees
        fs.writeFileSync('AllEmployee.json', JSON.stringify(employeeArray))
    } else {
        console.log('allready saved')
    }
    return employeeArray
}

var readAllEmployee = ()=>{
    return JSON.parse(fs.readFileSync('AllEmployee.json'))
}

module.exports ={
    addEmployee,
    readAllEmployee
}




