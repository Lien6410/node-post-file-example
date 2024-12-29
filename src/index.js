import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { fileUploadRouter } from './routes/fileUpload.js'
import { specs } from './config/swagger.js'

const app = express()
const PORT = 3000

// Serve static files from public directory
app.use(express.static('public'))

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

// API routes
app.use('/api', fileUploadRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`API Documentation: http://localhost:${PORT}/api-docs`)
  console.log(`Test page: http://localhost:${PORT}`)
})
