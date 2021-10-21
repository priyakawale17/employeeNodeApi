//9 to route the path we need express and router 
const express = require('express');
const router =express.Router();

// 10 we need to route the data into controller fileof emplyee for the we have exported that controller
// now here in route folder we take that controller as a const like 

const employeeController = require('../Controller/employee.controller');

// router.get take callbackfunction and here it is employeecontroller

// getAll employees
router.get('/',employeeController.getEmployeeList);

//22 get employee by id 
router.get('/:id',employeeController.getEmployeebyId);
// 23 create function in employee.model.js
// goto model 


//29 create pages for adding employee
router.post('/',employeeController.createNewEmployee);
// 30 create function for create employee in model.ts


module.exports =router
//11 here we exported the router module we import it in index.js file 