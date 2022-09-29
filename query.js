const mysql = require('mysql');

const database = mysql.createDatabase(/* Put your mysql informations here*/);
database.connect((error) => {
  if (error) throw error;
});

module.exports.query = (query) => {
  return new Promise((resolve, reject) => {
    database.query(query, (error, request) => {
      if (error) {
        reject(error);
      } else {
        resolve(request)
      }
    });
  })
};
