import express from 'express'
import { version } from '../package.json'
import { promisePool } from './db'

const app = express()

app.get('/ping', (_req, res) => {
  void (async () => {
    try {
      const [rows] = await promisePool.query('SELECT 1 + 1 AS Result')
      res.send(rows)
    } catch (error) {
      console.log(error)
    }
  })()
})

app.get('/employees', (_req, res) => {
  res.status(200).send('get employees')
})

app.post('/employees', (_req, res) => {
  res.status(200).send('create employees')
})

app.put('/employees', (_req, res) => {
  res.status(200).send('update employees')
})

app.delete('/employees', (_req, res) => {
  res.status(200).send('Delete employees')
})

app.get('/version', (_req, res) => {
  res.send({ version })
})

app.listen(3000)
console.log('server is running on port 3000')
