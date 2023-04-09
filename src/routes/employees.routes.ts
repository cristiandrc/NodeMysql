import { Router } from 'express'
import { version } from '../../package.json'
import {
  createEmployees,
  deleteEmployees,
  getEmployees,
  updateEmployees,
} from '../controllers/employees.controllers'

const router = Router()

router.get('/employees', getEmployees)

router.post('/employees', createEmployees)

router.put('/employees', updateEmployees)

router.delete('/employees', deleteEmployees)

router.get('/version', (_req, res) => {
  res.send({ version })
})

export default router
