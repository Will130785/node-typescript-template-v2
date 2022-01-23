import { Application } from "express"

export default (app: Application) => {
  // Start server
  app.listen(3000, () => {
    console.log('App running on port 3000')
  })
}
