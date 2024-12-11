import express from 'express'
import multer from 'multer';
const upload = multer();
const router = express.Router();
import { createMenuItem, getMenuItems } from '../controllers/menuItemController.js';

// Create a new menu item
router.post('/add-item', upload.none(), createMenuItem);

// Get all menu items for a specific menu
router.get('/item/:menuId', getMenuItems);

export default router;
