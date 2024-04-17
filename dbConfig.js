const sql = require('mssql');

const config = {
  user: 'sa',
  password: '123',
  server: 'BNK-TrungNQ\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
  database: 'Todo',

  options: {
    //encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true // Change to true for local dev / self-signed certs
  }
};

async function getConnection() {
  try {
    const pool = await sql.connect(config);
    return pool;
  } catch (err) {
    console.error('SQL Connection Error: ', err);
  }
}

module.exports = getConnection;
