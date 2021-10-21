//18 - import employee from model
const EmployeeModel = require('../models/employee.model')



//7 create controller for employee table employee.controller.js
// to get the list of employees craete one arrow function getEmployeeList

exports.getEmployeeList = (req , res)=>{
    console.log('here is the list of employee')


    //19 define getAllEmplyees from employee model 
    EmployeeModel.getAllEmployees((err,employee)=>{
        console.log('we are here')
        if(err){
            console.log(err)

        }
        res.send(employee)
    })
    //20  get employeeby id 
    //create function in controller
}
// 8 create a route file to get the employee list inside routes with 
//name employee.route.js

exports.getEmployeebyId =(req,res)=>{
    console.log('inside get imploye by id')
    // 21 go to route employee.routes.js

    //26 here define function
    EmployeeModel.getEmployeeByID(req.params.id,(err,employee)=>{
        if(err)
        res.send(err);
        console.log('get single employee')
        res.send(employee)
    })
}

// 27 create new employe

exports.createNewEmployee=(req,res)=>{
    console.log('create new app')
    //28 create route
}