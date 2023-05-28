const Employee = require("./model.js").Employee;

function deleteEmployee(request, response) {
  const employeeId = request.params.id;

  Employee.update({
    'emp_status': 'I'
  }, {
    where: {
      id: employeeId
    }
  }).then( count => {
    if(count[0] === 0) {
      response.status(400).json({status: "ERROR", error: "No Employee found"})
    } else {
      response.json({status: 'ok', messsage: 'EMPLOYEE DELETED...'})
    }
  })
}

module.exports = {
  deleteEmployee: deleteEmployee
}