import { Application } from 'express'
import routes from '../routes/index'

export default (app: Application) => {
  // Get routes
  app.use('/', routes)
}
