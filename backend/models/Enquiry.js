import mongoose from 'mongoose'

const enquirySchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    parentName: { type: String, default: '' },
    phone: { type: String, required: true },
    email: { type: String, default: '' },
    grade: { type: String, default: '' },
    subject: { type: String, default: '' },
    message: { type: String, default: '' },
    status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
  },
  { timestamps: true }
)

export default mongoose.model('Enquiry', enquirySchema)
