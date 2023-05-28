1. Install SQL Server Express and SSMS (SQL Server Management Studio) on your machines

2. Create a new database called `POC` and a Table called `Employee` with the following columns
- id - running id
- company_id
- emp_id
- emp_first_name
- emp_last_name
- emp_date_of_joining
- emp_status

3. Create the following API using express.js
  1. Type- POST
  - API name - Employee
  - API json - 
    - emp_id,
    - emp_first_name,
    - emp_last_name,
    - emp_date_of_joining


  2. insert the data to the employee table with `emp_status` as `"A"` (`active`)
  - Create the following API using express.js
  - Type- DELETE
  - API name - Employee/id=emp_id
  - API json - none, query string has the data

  
Write an updated statement and execute on the employee table and change emp_status as "I" (In-active) for the passed emp_id

Create the following API using express.js
Type- PUT
API name - Employee
API json - emp_id, emp_first_name, emp_last_name
Write an updated statement and execute on the employee table and change emp_first_name, emp_last_name to the values passed in the json for the passed emp_id
Use Post man to execute all the queries

username : loginuser,
password: loginuser