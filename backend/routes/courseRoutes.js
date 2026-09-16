import express from 'express'
import Course from '../models/Course.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const courses = await Course.find().sort({ grade: 1 })
  res.json(courses)
})

router.get('/:id', async (req, res) => {
  const course = await Course.findById(req.params.id)
  if (!course) return res.status(404).json({ message: 'Course not found' })
  res.json(course)
})

router.post('/', protect, async (req, res) => {
  const course = await Course.create(req.body)
  res.status(201).json(course)
})

router.put('/:id', protect, async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!course) return res.status(404).json({ message: 'Course not found' })
  res.json(course)
})

router.delete('/:id', protect, async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id)
  if (!course) return res.status(404).json({ message: 'Course not found' })
  res.json({ message: 'Course deleted' })
})

export default router
