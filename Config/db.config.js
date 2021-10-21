//6 -create db.config.js file and create connection with database
// after that go to controlle folder
const mysql = require('mysql');

//databse connection
const dbConn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crudnodemysql'

});
dbConn.connect(function(err){
    if(err) throw err;
    console.log('database is connected ')
})

//export module

module.exports = dbConn ;