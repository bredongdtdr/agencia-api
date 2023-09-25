import { type Router } from 'express'
import { type Router } from 'model/Pessoas'

import { type Express, Router } from 'express'
import fg from 'fast-glob'

export default (app: Express): void => {
  const router = Router()
  app.use(router)
  fg.sync('**/src/routers/**_router').map(async file => { console.log(file) })
}