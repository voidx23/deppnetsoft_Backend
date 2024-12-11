import MenuItem from '../models/MenuItem.js';
import mongoose from 'mongoose';

// Add a menu item
const createMenuItem = async (req, res) => {
    console.log("first")
    const normalObj = Object.assign({}, req.body);
    console.log(normalObj)
    try {
        const { name, description, price, menuId } = req.body;

        if (!mongoose.Types.ObjectId.isValid(menuId)) {
            return res.status(400).json({ message: 'Invalid menuId' });
        }

        const menuItem = new MenuItem({
            name,
            description,
            price,
            menuId: mongoose.Types.ObjectId.createFromHexString(menuId)
        });

        await menuItem.save();
        res.status(201).json(menuItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all menu items for a specific menu
const getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find({ menuId: req.params.menuId });
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createMenuItem, getMenuItems };
