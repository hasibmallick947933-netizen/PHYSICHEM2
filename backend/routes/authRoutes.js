import express from 'express'
import Admin from '../models/Admin.js'
import generateToken from '../utils/generateToken.js'

const router = express.Router()

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const admin = await Admin.findOne({ email })
  if (!admin || !(await admin.matchPassword(password))) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }
  res.json({
    token: generateToken(admin._id),
    admin: { id: admin._id, email: admin.email, name: admin.name },
  })
})

export default router
