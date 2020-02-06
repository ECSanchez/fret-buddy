// Node.js + Express server backend for tablesapp
// v2 - use SQLite (https://www.sqlite.org/index.html) as a database
//
// COGS121 by Philip Guo
// https://github.com/pgbovine/COGS121

// run this once to create the initial database as the tables.db file
//   node create_database.js

// to clear the database, simply delete the tables.db file:
//   rm tables.db

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('tables.db');

// run each database statement *serially* one after another
// (if you don't do this, then all statements will run in parallel,
//  which we don't want)
db.serialize(() => {
  // create a new database table:
  db.run("CREATE TABLE scales (name TEXT, job TEXT)");

  // insert 3 rows of data:
  db.run("INSERT INTO scales VALUES ('Philip', 'professor')");
  db.run("INSERT INTO scales VALUES ('John', 'student')");
  db.run("INSERT INTO scales VALUES ('Carol', 'engineer')");

  console.log('successfully created the scales table in tables.db');

  // print them out to confirm their contents:
  db.each("SELECT name, job FROM scales", (err, row) => {
      console.log(row.name + ": " + row.job );
  });
});

db.close();
