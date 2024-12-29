import path from 'path';

export const handleFileUpload = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const originalName = req.file.originalname;
  const extension = path.extname(originalName);
  const nameWithoutExt = path.basename(originalName, extension);

  res.json({
    filename: nameWithoutExt,
    extension: extension.slice(1) // Remove the dot from extension
  });
};