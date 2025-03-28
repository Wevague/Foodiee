import { mongoose } from "mongoose";

const menuItemModel = new mongoose.Schema({
    itemName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    
});

const MenuItem = mongoose.model('MenuItem', menuItemModel);
export default MenuItem;
