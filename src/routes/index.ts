import { Request, Response, NextFunction, Router } from 'express'
const router = Router()
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Node Express TypeScript Template')
})

export default router
