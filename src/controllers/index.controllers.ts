import { RequestHandler } from 'express'
import { promisePool } from '../db'

export const ping: RequestHandler = (_req, res) => {
  void (async () => {
    try {
      const [rows] = await promisePool.query('SELECT 1 + 1 AS Result')
      res.send(rows)
    } catch (error) {
      console.log(error)
    }
  })()
}
