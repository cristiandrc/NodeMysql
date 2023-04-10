import express from 'express'
import employeesRoutes from './routes/employees.routes'
import indexRoutes from './routes/index.routes'

const app = express()

app.use(express.json())

app.use('/api', employeesRoutes)
app.use(indexRoutes)

app.use((_req, res) => {
  res.status(404).send({ message: 'Endpoint not found' })
})

export default app
