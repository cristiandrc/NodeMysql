import { envConfig } from './config'
import app from './app'

app.listen(envConfig.PORT)

console.log(`server is running on port ${envConfig.PORT}`)
