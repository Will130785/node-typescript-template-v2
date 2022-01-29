import { Request, Response, NextFunction } from "express";
import Sample from '../../models/Sample'

const sampleController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return {
      status: 'success'
    }
  } catch (err) {
    return {
      status: 'error'
    }
  }
  res.send('Node Express TypeScript Template')
}

// Sample Get
const sampleGet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    Sample.findOne({ email: req.body.email }, (err: string, user: object) => {
      if (!err) {
        console.log(user)
        return res.status(200).json({
          success: true,
          user
        })
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// Sample Post
const samplePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get data from request
    const data: object = req.body
    
    Sample.create(data, (err, newUser) => {
      if (!err) {
        console.log(newUser)
        return res.status(201).json({
          success: true,
          user: newUser
        })
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// Sample Put
const samplePut = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get data from req
    const data = req.body
    Sample.findOneAndUpdate({ email: req.body.email }, data, (err: string, updatedUser: object) => {
      if (!err) {
        console.log(updatedUser)
        return res.status(201).json({
          success: true,
          user: updatedUser
        })
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// Sample Delete
const sampleDelete = async (req: Request, res: Response, next: NextFunction) => {
  try {
    Sample.findOneAndDelete({ email: req.body.email }, (err: string, deletedUser: object) => {
      if (!err) {
        console.log(deletedUser)
        res.status(201).json({
          success: true,
          deletedUser
        })
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

export default {
  sampleController,
  samplePost,
  sampleGet,
  samplePut,
  sampleDelete
}