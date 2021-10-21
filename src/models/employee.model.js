//14 check http://localhost:5000/api/v1/employees on this link after step 13
// after that create employee.model.js file inside model
//if you run the link in console you will get string "here is the lis "
// now to get actual list we need database connection inside model 
// 15 -create db connection

const dbConn = require('../../Config/db.config');

// 16 - now here we need to define one variable for the database table 
// define all the field in table here

var Employee =(employee)=>{
    this.firstName=employee.firstName;
    this.lastName=employee.lastName;
    this.email =employee.email;
    this.phone=employee.phone;
    this.organization=employee.organization;
    this.designation =employee.designation;
    this.salary =employee.salary;
    this.status=employee.status;
    

} 
// 16 now here we need to write actual query to fetch data in result

Employee.getAllEmployees=(result)=>{
    dbConn.query('select * from employees', (err,res)=>{
        if(err){
            console.log('erroe inside mode.js',err);
            console.log(result(null,err))
            // console.log(result)
        }
        else{
            console.log('employee fetch succesful');
            result(null,res)
            
        }
    })
}

//24 get employee by id  from database
Employee.getEmployeeByID =(id, result)=>{
    console.log('inside employee get by id')

    dbConn.query('select * from employees WHERE ?',id,(err,res)=>{
        if(err){
            console.log('error while fetching employee',err)
            result(null,err)
        }
        else{
            result(null,res)
        }
    })
    //25 post data in controller
}

//31 create function for employee
Employee.createEmployee
module.exports = Employee;
// 17 -to display the list on server we need to import the module inside employee controller 