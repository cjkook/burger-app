let connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
let orm = {
  selectWhere: (table, column, value) => {
    let query = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(query, [table, column, value], (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  },
  // todo SELECT WHERE devoured = true
  getAll: (db, cb) => {
    let query = "SELECT * FROM burgers;";
    console.log(query)
    connection.query(query,db,(err,data)=>{
      if (err) {
        throw err
      }
      // ! debug
      cb(data);
    })
  },
  insertItem: (db,entry,cb) => {
    let query = "INSERT INTO burgers (name,devoured) VALUES (?,?)"
    connection.query(query,[entry.name,false],(err,data)=>{
      if (err) {
        throw err
      }
      // ! debug
      console.log(data)
      cb(data);
    })
  },
  update: (id,cb) => {
    console.log(id)
    let query = "UPDATE burgers "
    query += "SET devoured = true "
    query += `WHERE id=${id}`
    console.log(query)
    connection.query(query, (err,result) => {
      if (err) {throw err}
      cb(result)
    })
  }
};

module.exports = orm
