import { createConnection } from "mysql2/promise";

async function queryDatabase() {
  const connection = await createConnection({
    host: "localhost",
    user: "your_username",
    password: "your_password",
    database: "your_database_name",
  });

  const [rows, fields] = await connection.execute("SELECT * FROM Pizza");
  console.log(rows);
  await connection.end();
}

queryDatabase().catch(console.error);

export default queryDatabase; 