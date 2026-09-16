import mongoose from 'mongoose'

const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subject: { type: String, enum: ['Physics', 'Chemistry'], required: true },
    classes: { type: String, default: '9-12' },
    qualification: { type: String, default: '' },
    experience: { type: String, default: '' },
    bio: { type: String, default: '' },
    philosophy: { type: String, default: '' },
    photoUrl: { type: String, default: '' },
  },
  { timestamps: true }
)

export default mongoose.model('Teacher', teacherSchema)
