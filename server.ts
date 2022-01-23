import express, { Application, Request, Response, NextFunction } from 'express'
import expressApp from './src/app/index'

const app: Application = express()

expressApp(app)
