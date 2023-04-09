import express from 'express'
import employeesRoutes from './routes/employees.routes'
import indexRoutes from './routes/index.routes'

const app = express()

app.use(employeesRoutes)
app.use(indexRoutes)

app.listen(3000)
console.log('server is running on port 3000')
