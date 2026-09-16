import express from 'express'
import Teacher from '../models/Teacher.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const teachers = await Teacher.find().sort({ createdAt: -1 })
  res.json(teachers)
})

router.get('/:id', async (req, res) => {
  const teacher = await Teacher.findById(req.params.id)
  if (!teacher) return res.status(404).json({ message: 'Teacher not found' })
  res.json(teacher)
})

router.post('/', protect, async (req, res) => {
  const teacher = await Teacher.create(req.body)
  res.status(201).json(teacher)
})

router.put('/:id', protect, async (req, res) => {
  const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!teacher) return res.status(404).json({ message: 'Teacher not found' })
  res.json(teacher)
})

router.delete('/:id', protect, async (req, res) => {
  const teacher = await Teacher.findByIdAndDelete(req.params.id)
  if (!teacher) return res.status(404).json({ message: 'Teacher not found' })
  res.json({ message: 'Teacher deleted' })
})

export default router
