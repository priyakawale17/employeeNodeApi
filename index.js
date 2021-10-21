//the first step is to create json file package.json
//second step is to install all dependencies like mysql express body parser cors
//3 - create index.js file and run the port 
//4 - create database crudnodemysql and employee table
// 5 -0 employee( id,firstname,lastname,organization,email,status,phone,isdeleted,created at ,updated at)
//create folder structure src(controller,models,routes) config folder in main folder 
// go to config.js
const express= require("express")
const bodyparser =require('body-parser')

const app =express();
//setup server (setup step 3)
const port=process.env.PORT || 5000 ;
app.use(bodyparser());
app.use(bodyparser.urlencoded({extended:false}))

app.get('/',function(req,res){
    res.send('hello world')
})

// 12 - import route of employee
const employeeRoutes = require('./src/routes/employee.route');
//13 define a path /api/vi/employees to get data 
// 14 goto models
app.use('/api/v1/employees', employeeRoutes);

// app.use('/api/v1/employees/:id', employeeRoutes);

app.listen(port,function(){
    console.log("port is runnign ata port")
})