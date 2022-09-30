import { Router } from 'express'
import schemaValidator from '../middlewares/schemaValidator'
import tokenValidate from '../middlewares/tokenValidate'
import userCollectionSchemas from '../schemas/userCollectionSchemas'
import userCollectionsController from '../controllers/userCollectionsController'

const route = Router()

route.use(tokenValidate)

route.post(
  '/user-collections',
  schemaValidator(userCollectionSchemas.create),
  userCollectionsController.create
)

export default route
