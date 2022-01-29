import mongoose from 'mongoose'

interface Sample {
  firstname: string,
  lastname: string,
  email: string,
  password: string
}

const newSampleSchema = new mongoose.Schema<Sample>({
  firstname: String,
  lastname: String,
  email: String,
  password: String
})

export default mongoose.model<Sample>('Sample', newSampleSchema)
