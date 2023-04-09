import mysql from 'mysql2'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'toor',
  database: 'companydb',
  port: 3308
})

export const promisePool = pool.promise()
