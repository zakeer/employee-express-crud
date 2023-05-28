const Employee = require("./model").Employee;

function createEmployee(request, response) {
  const body = request.body; // fn, ln, dj
  body.emp_status = 'A';

  if(!body.emp_first_name) {
    return response
      .status(400)
      .json({status: "error", message: "Employee name is required"})
  }

  Employee.create({
    company_id          : body.company_id,
    emp_id              : body.company_id,
    emp_first_name      : body.emp_first_name,
    emp_last_name       : body.emp_last_name,
    emp_date_of_joining : body.emp_date_of_joining,
    emp_status          : 'A'
  }).then(newEmployee => {
    response.json(newEmployee)
  }).catch(err => {
    response.status(400).json({status: "error", error: err})
  })

}

module.exports = {
  createEmployee, // createEmployee: createEmployee
}