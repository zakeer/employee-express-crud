const model = require("./model.js");
const Employee = model.Employee;
const db = model.db;

const employeeOptions = {
  attributes: [
    'id',
    'company_id',
    'emp_id',
    'emp_first_name',
    'emp_last_name',
    'emp_date_of_joining',
    'emp_status',
  ],
  where: {
    'emp_status': "A"
  }
}

function getEmployee(request, response) {
  const employeeId = request.params.id;

  Employee
    .findByPk(employeeId, employeeOptions)
    .then(employee => {
      if(!employee) {
        throw new Error("EMPLOYEE_NOT_FOUND")
      } else {
        response.json({
          status: "ok",
          employee: employee
        })
      }
    })
    .catch(error => response.status(404).json({
      status: "NOT_FOUND",
      message: `Unable to find employee with id: ${employeeId}`
    }))
}

function getAllEmployees(request, response) {
  Employee
    .findAll(employeeOptions, )
    .then((employessList) => {
      response.json({
        status: "ok",
        data: employessList
      })
    })
    .catch((error) => {
      response.status(400).send(error)
    })
}

function getAllInactiveEmployees(req, res) {
  // Employee.findAll({
  //   where: {
  //     'emp_status': 'I'
  //   }
  // }).then(inactiveEmployess => res.json({
  //   status: 'ok',
  //   data: inactiveEmployess
  // })).catch(err => res.status(400).json({status: 'error', error: err}))

  // Employee.findAll({where: {emp_status: 'I'}})
  db
    .query(`SELECT * from Employee WHERE emp_status='I'`)
    .then(inactiveEmployess => res.json({
      status: 'ok',
      data: inactiveEmployess
    }))
    .catch(err => res.status(400).json({status: 'error', error: err}))

}

module.exports = {
  getEmployee,
  getAllEmployees,
  getAllInactiveEmployees
}