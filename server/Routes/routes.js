import express from 'express';
import * as userController from '../Controller/user.js'


const router = express.Router();

router.post('/addMenu',userController.addMenus)
router.get('/getMenu',userController.getMenus)
router.get('/getMenuDetails/:selectedMenuId',userController.getMenuDetails)
router.post('/addMenuItem',userController.addMenuDetails)
router.get('/getMenuItem',userController.getMenuItem);




export default router;