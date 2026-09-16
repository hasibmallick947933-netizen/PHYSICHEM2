import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import teacherRoutes from './routes/teacherRoutes.js'
import courseRoutes from './routes/courseRoutes.js'
import enquiryRoutes from './routes/enquiryRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import adminRoutes from './routes/adminRoutes.js'

const app = express()

connectDB()

app.use(cors({ origin: process.env.CLIENT_URL || '*', credentials: true }))
app.use(express.json())

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

app.use('/api/auth', authRoutes)
app.use('/api/teachers', teacherRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api/enquiries', enquiryRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/admin', adminRoutes)

// Central error handler
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({ message: err.message || 'Server error' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`PHYSICHEM backend running on port ${PORT}`))
