import { Router } from 'express'
import { ping } from '../controllers/index.controllers'

const router = Router()

router.get('/ping', ping)

export default router
