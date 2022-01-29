import { Router } from 'express'
import app from '../app'
import controllers from '../controllers/index'
const router = Router()

// Sampler get route
router.get('/', controllers.sampleController.sampleController)
// Sample post route
router.post('/sample-post', controllers.sampleController.samplePost)
// Sample get user by email route
router.get('/sample-get-email', controllers.sampleController.sampleGet)
// Sample update user by email route
router.put('/sample-put-email', controllers.sampleController.samplePut)
// Sample delete user by email route
router.delete('/sample-delete-email', controllers.sampleController.sampleDelete)

export default router
