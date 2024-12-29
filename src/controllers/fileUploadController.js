import path from 'path'

export const handleFileUpload = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' })
  }

  const originalName = req.file.originalname
  const extension = path.extname(originalName)
  const nameWithoutExt = path.basename(originalName, extension)
  const user = req.body.user || 'Anonymous' // Get user from request body

  res.json({
    filename: nameWithoutExt,
    extension: extension.slice(1), // Remove the dot from extension
    user: user, // Ensure req.user exists
  })
}
