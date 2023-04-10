import mysql from 'mysql2'
import { envConfig } from './config'

const pool = mysql.createPool({
  host: envConfig.DB_HOST,
  user: envConfig.DB_USER,
  password: envConfig.DB_PASSWORD,
  database: envConfig.DB_DATABASE,
  port: +envConfig.DB_PORT
})

export const promisePool = pool.promise()
