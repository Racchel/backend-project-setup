import express from 'express'

const app = express()
const PORT = 3333

app.get('/', (req, res) => {
   return res.json({ message: 'Hello World'})
})

app.listen(PORT, () => {
   console.log(`App listen on port ${PORT}`)
}) 