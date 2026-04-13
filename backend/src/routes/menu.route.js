import Router from 'express'
import { verifyJWT } from '../middleware/auth.middelware.js';
import { addNewMenu } from '../controller/menu.controller.js';


const router = Router()

router.route("/create/new-item").post(verifyJWT, addNewMenu)


export default router
