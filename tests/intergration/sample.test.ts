import dotenv from 'dotenv'
dotenv.config({
  path: '.env.test'
})

import express, { Application } from 'express'
import mongoose from 'mongoose'
import request from 'supertest'

const app: Application = express()
import expressApp from '../../src/app'
expressApp(app)

describe('Sample tests', () => {
  // Add user
  it('Adds a new user to the database', async () => {
    const res = await request(app).post('/sample-post')
    .send({
      firstname: 'Will',
      lastname: 'Constable',
      email: 'will_constable@msn.com',
      password: 'test123'
    })
    expect(res.statusCode).toEqual(201)
  })
  // Get user by email
  it('Gets a user by email', async () => {
    const res = await request(app).get('/sample-get-email')
    .send({
      email: 'will_constable@msn.com'
    })
    expect(res.statusCode).toEqual(200)
  })
  // Update user by email
  it('Gets user by email and updates', async () => {
    const res = await request(app).put('/sample-put-email')
    .send({
      firstname: 'William',
      lastname: 'Constable2',
      email: 'will_constable@msn.com',
      password: 'test321'
    })
    expect(res.statusCode).toEqual(201)
  })
  // Delete user by email
  it('Gets user by email and deletes', async () => {
    const res = await request(app).delete('/sample-delete-email')
    .send({
      email: 'will_constable@msn.com'
    })
    expect(res.statusCode).toEqual(201)
  })
})

afterAll(async () => {
  await mongoose.connection.db.dropDatabase()
  await mongoose.disconnect()
})
