import { Application } from 'express'
import appConfig from './appConfig'
import appStart from './appStart'
import dbConnect from './dbConnect'
// const { DB_CONNECT } = process.env

export default (app: Application) => {
  dbConnect()
  appConfig(app)
  appStart(app)
}
