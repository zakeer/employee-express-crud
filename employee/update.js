const Employee = require("./model.js").Employee;

function updateEmployee(request, response) {
  const employeeId = request.params.id;
  const updatedBody = request.body; // {}

  Employee
    .update(updatedBody, { where: { id: employeeId } })
    .then(updatedCount => {
      console.log("UPDATE REQUEST", updatedCount)
      if(updatedCount[0] === 0) {
        response.status(400).json({status: "error", error: `Employee not found` })
      } else {
        response.json({status: 'ok', message: 'employee update'})
      }
    })
    .catch(err => {
      response.status(400).json({status: "error", error:err })
    })

}

module.exports = {
  updateEmployee: updateEmployee 
}