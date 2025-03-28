import { mongoose } from "mongoose";

const menuModel = new mongoose.Schema({
    menuName: { type: String, required: true },
    description: { type: String, required: true },
    menuItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }],
   

})

const Menu = mongoose.model('Menu', menuModel);
export default Menu;