import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema(
  {
    grade: { type: String, required: true },
    subjects: { type: String, default: 'Physics, Chemistry' },
    description: { type: String, default: '' },
    highlights: [{ type: String }],
    timings: { type: String, default: '' },
    fees: { type: String, default: '' },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
  },
  { timestamps: true }
)

export default mongoose.model('Course', courseSchema)
