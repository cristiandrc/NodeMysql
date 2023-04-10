import { Router } from 'express'
import { version } from '../../package.json'
import {
  createEmployees,
  deleteEmployees,
  getEmployees,
  getEmployee,
  updateEmployees
} from '../controllers/employees.controllers'

const router = Router()

router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployees)

router.patch('/employees/:id', updateEmployees)

router.delete('/employees/:id', deleteEmployees)

router.get('/version', (_req, res) => {
  res.send({ version })
})

export default router
