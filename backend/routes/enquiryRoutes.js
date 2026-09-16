import express from 'express'
import Enquiry from '../models/Enquiry.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

// Public: students/parents submit enquiries from the Contact page
router.post('/', async (req, res) => {
  const enquiry = await Enquiry.create(req.body)
  res.status(201).json(enquiry)
})

// Protected: admin views/manages enquiries
router.get('/', protect, async (req, res) => {
  const enquiries = await Enquiry.find().sort({ createdAt: -1 })
  res.json(enquiries)
})

router.patch('/:id', protect, async (req, res) => {
  const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!enquiry) return res.status(404).json({ message: 'Enquiry not found' })
  res.json(enquiry)
})

router.delete('/:id', protect, async (req, res) => {
  await Enquiry.findByIdAndDelete(req.params.id)
  res.json({ message: 'Enquiry deleted' })
})

export default router
