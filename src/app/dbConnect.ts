import mongoose from 'mongoose'
import env from '../../env.config'
const DB_CONNECT = env.DB_CONNECT
export default async () => {
  try {
    mongoose.connect(DB_CONNECT)
    // Check database connection
    const db = await mongoose.connection
    db.once('open', () => {
      console.log('Connected to mongo')
    })
    db.on('error', () => {
      console.log('Error')
    })
  } catch (err) {

  }
}
