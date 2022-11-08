const express = require("express");
const mysql = require("mysql");

const port = 3000;
const app = express();
const config = {
  host: "db",
  user: "root",
  password: "password",
  database: "nodedb",
};
const connection = mysql.createConnection(config);

function savePerson(personName) {
  connection.query(`INSERT INTO people(name) values('${personName}')`);
}

function getPeople(callback) {
  connection.query(`SELECT * FROM people`, callback);
}

app.get("/", async (req, res) => {
  savePerson("Breno");
  getPeople(function (err, result, fields) {
    if (err) return res.send(err);
    let itemsList = "";
    result.forEach((row) => (itemsList += `<li>${row.name}</li>`));
    const nameList = `<ul>${itemsList}</ul>`;
    return res.send("<h1>Full Cycle Rocks!</h1>" + nameList);
  });
});

app.listen(port, () => {
  console.log("Running on port " + port);
});
