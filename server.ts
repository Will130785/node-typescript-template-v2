import express, { Application } from 'express'
import grn from 'git-repo-name'
import dotenv from 'dotenv'
import colors from 'colors'
const { NODE_ENV } = process.env
// Set env file
const envPath: string = NODE_ENV === 'production' ? '.env' : `.env.${NODE_ENV}`
console.log(envPath)
dotenv.config({
  path: envPath
})
console.log(colors.green('App start'))
const repoName = grn.sync()
console.log('Using repo name: ', repoName)

const app: Application = express()

import expressApp from './src/app/index'
expressApp(app)
