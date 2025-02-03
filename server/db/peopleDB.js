const conn = require('./connection');

const insert = (person) => conn.execute(
  `INSERT INTO people
  (first_name, last_name, birthday, email, password, gender, weight, height)
  VALUES (?, ?, ?, ? ?, ?, ?, ?)`,
  [person.firstName, person.lastName, person.birthday,
    person.email, person.password, person.gender, person.weight, person.height]
);

module.exports = {
  insert,
};