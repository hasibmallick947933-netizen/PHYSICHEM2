import express from 'express'
import Teacher from '../models/Teacher.js'
import Course from '../models/Course.js'
import Enquiry from '../models/Enquiry.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

router.get('/stats', protect, async (req, res) => {
  const [totalTeachers, totalCourses, totalEnquiries, newEnquiries] = await Promise.all([
    Teacher.countDocuments(),
    Course.countDocuments(),
    Enquiry.countDocuments(),
    Enquiry.countDocuments({ status: 'new' }),
  ])
  res.json({ totalTeachers, totalCourses, totalEnquiries, newEnquiries })
})

export default router
