import { Router } from 'express'
import { promisePool } from '../db'

const router = Router()

router.get('/ping', (_req, res) => {
  void (async () => {
    try {
      const [rows] = await promisePool.query('SELECT 1 + 1 AS Result')
      res.send(rows)
    } catch (error) {
      console.log(error)
    }
  })()
})

export default router
