const sequelize = require('sequelize');

const Sequelize = sequelize.Sequelize;
const DataTypes = sequelize.DataTypes;

// new sqlite3 instance
/*
const db = new Sequelize('POC', 'loginuser', 'loginuser', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
      options: {
          encrypt: true,
      }
  }
});
*/
const db = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
})

db.authenticate()
  .then(() => console.log("DB CONNNECTED"))
  .catch((error) => console.log("DB NOT CONNECTED", error))

const Employee = db.define('Employee', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  company_id: DataTypes.INTEGER,
  emp_id: DataTypes.STRING,
  emp_first_name: DataTypes.STRING,
  emp_last_name: DataTypes.STRING,
  emp_date_of_joining: DataTypes.DATE,
  emp_status: DataTypes.CHAR,
}, {
  tableName: 'Employee',
  timestamps: false
});

db.sync()

module.exports =  {
  db: db,
  Employee: Employee
}