const express = require("express");
const read = require("./employee/read.js");
const create = require("./employee/create.js");
const update = require("./employee/update.js");
const del = require("./employee/delete.js");

const app = express();
app.use( express.json() );

app.get("/", (req, res) => res.send(`Employee APIs are running... `));

/*
Get All Employees
*/
app.get('/Employees', read.getAllEmployees);

/*
Get All inactive employees
*/
app.get('/InActiveEmployees', read.getAllInactiveEmployees);

/*
Get Single Employee Based on ID
*/
app.get(`/Employees/:id`, read.getEmployee)

/*
Post new employee
@Request Body: { 
  emp_first_name,
  emp_last_name,
  emp_date_of_joining
 }
*/
app.post('/Employees', create.createEmployee);

/*
PUT: For Update existing employee
*/
app.put('/Employees/:id', update.updateEmployee);

/*
DELETE: For removing existing employee
*/
app.delete('/Employees/:id', del.deleteEmployee)

app.listen(4000, () => {
  console.log(`server running on http://localhost:4000` )
})