import { Application } from "express"
const { PORT, NODE_ENV } = process.env
console.log('server start')
// To log out on app start up
// port
// Environment
// git repo
export default (app: Application) => {
  // Start server if not in test
  if (NODE_ENV !== 'test') {
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`)
    })
  }
}
