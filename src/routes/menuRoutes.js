import express from 'express';
const router = express.Router();
import { createMenu, getMenus } from '../controllers/menuController.js';


// Create a new menu
router.post('/add-main', createMenu);

// Get all menus
router.get('/get-main', getMenus);

export default router;
