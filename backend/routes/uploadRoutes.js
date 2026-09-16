import express from 'express'
import { upload } from '../config/cloudinary.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

router.post('/', protect, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' })
  res.json({ url: req.file.path, publicId: req.file.filename })
})

export default router
