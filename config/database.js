import mysql from "mysql2"

// Créer une connection avec la base de donné
const connection = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "", 
    database: "test", 
  });

  // Test de connection
  connection.connect((error) => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

  export default connection.promise()