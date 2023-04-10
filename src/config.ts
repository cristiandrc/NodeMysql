import { config } from 'dotenv'

config()

console.log(process.env)

export const envConfig = {
  PORT: process.env.PORT ?? 3000,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT ?? 3308,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE
}
