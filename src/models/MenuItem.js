import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    menuId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
    image: { type: String }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;
