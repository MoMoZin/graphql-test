const db = require('./db');
const Query = {
  //resolver function for greeting
  greeting: () => {
    return "Hello from Mo's first schema project!";

  },

  //resolver function for students returns list
  students: () => db.students.list(),

  //resolver function for studentbyId
  studentById: (rrot, args, context, info) => {
    //args will contain parameter passed in query
    return db.students.get(args.id);
  },

  sayHello: (root, args, context, info) => {
    return `Hi ${args.name} GraphQL server says Hello to you!!`;
  }

};




//for each single student object returned,resolver is invoked
const Student = {
  fullName: (root, args, context, info) => {
    return root.firstName + ":" + root.lastName;
  },
  college: (root) => {
    return db.colleges.get(root.collegeId);
  }
};

module.exports = { Query, Student };