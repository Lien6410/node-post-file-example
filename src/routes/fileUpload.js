import express from 'express'
import { uploadMiddleware } from '../middleware/upload.js'
import { handleFileUpload } from '../controllers/fileUploadController.js'

const router = express.Router()

/**
 * @swagger
 * /api/upload:
 *   post:
 *     tags:
 *       - File Upload
 *     summary: Upload a file
 *     description: Uploads a file and returns its name, extension, and user
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *               user:
 *                 type: string
 *     responses:
 *       200:
 *         description: File processed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 filename:
 *                   type: string
 *                 extension:
 *                   type: string
 *                 user:
 *                   type: string
 *       400:
 *         description: No file uploaded
 */
router.post('/upload', uploadMiddleware, handleFileUpload)

/**
 * @swagger
 * /api/ping:
 *   get:
 *     summary: Check if the server is running
 *     description: Returns a pong message
 *     responses:
 *       200:
 *         description: Server is running
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: pong
 */
router.get('/ping', (req, res) => {
  res.send('pong')
})

export { router as fileUploadRouter }
