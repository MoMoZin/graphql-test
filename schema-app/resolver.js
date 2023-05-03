const db = require('./db');
const Query = {
  greeting: () => {
    return "Hello from Mo's first schema project!";
  },
  students: () => db.students.list()
};

module.exports = { Query };