import 'dotenv/config'
import connectDB from '../config/db.js'
import Admin from '../models/Admin.js'
import mongoose from 'mongoose'

async function seed() {
  await connectDB()
  const email = process.env.ADMIN_SEED_EMAIL
  const password = process.env.ADMIN_SEED_PASSWORD

  if (!email || !password) {
    console.error('Set ADMIN_SEED_EMAIL and ADMIN_SEED_PASSWORD in your .env before seeding.')
    process.exit(1)
  }

  const exists = await Admin.findOne({ email })
  if (exists) {
    console.log('Admin already exists:', email)
  } else {
    await Admin.create({ email, password, name: 'Admin' })
    console.log('Admin created:', email)
  }
  await mongoose.disconnect()
  process.exit(0)
}

seed()
