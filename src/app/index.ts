import { Application } from 'express'
import appConfig from './appConfig'
import appStart from './appStart'

export default (app: Application) => {
  appConfig(app)
  appStart(app)
}
