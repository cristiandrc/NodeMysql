import express from 'express'
import { version } from '../package.json'
const app = express()

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
