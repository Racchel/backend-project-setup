import express from 'express'
import { TestController } from '@controllers/TestController'

const app = express()
const PORT = 3333

app.get('/', (req, res) => {
   const testController = new TestController()
   testController.teste()
   
   return res.json({ message: 'Hello World'})
})

app.listen(PORT, () => {
   console.log(`App listen on port ${PORT}`)
}) 