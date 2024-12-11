import Menu from '../models/Menu.js';

// Create a main menu
const createMenu = async (req, res) => {
  try {
    const newMenu = new Menu({ name: req.body.name });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all menus
const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createMenu, getMenus };

