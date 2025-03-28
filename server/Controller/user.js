import MenuItem from "../model/menuitems.js";
import menuitem from "../model/menuitems.js";
import Menu from "../model/menuSchema.js";


export const addMenus = async (req, res) => {
    try {
        const { menuName, description } = req.body;

        const newMenu = new Menu({
            menuName,
            description
        });

        await newMenu.save();

        console.log(menuName, description);
        res.status(200).json({ message: "Menu added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};


export const getMenus = async (req, res) => {

    try {
        const menus = await Menu.find();
        res.status(200).json(menus);

    } catch (error) {

    }
}


export const getMenuDetails = async (req, res) => {
    const selectedMenuId = req.params.selectedMenuId;
    try {
        const menu = await Menu.findById(selectedMenuId).populate('menuItems');;
        if (!menu) {
            return res.status(404).json({ message: "Menu not found" });
        }
        console.log("Menu Details:", menu);

        res.status(200).json(menu);
    } catch (error) {
        console.error("Error fetching menu:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const addMenuDetails = async (req, res) => {
    const { itemName, description, price, menuId } = req.body;

    if (!itemName || !description || !price || !menuId) {
        return res.status(400).json({ message: 'All are required' });
    }

    try {
        const newMenuItem = new MenuItem({ itemName, description, price });
        await newMenuItem.save();

        const menu = await Menu.findById(menuId);
        if (!menu) {
            return res.status(404).json({ message: 'Menu not found' });
        }

        menu.menuItems.push(newMenuItem._id);

        await menu.save();

        res.status(201).json({
            message: 'Menu item added successfully',
            menuItem: newMenuItem,
        });
    } catch (error) {
        console.error('Error creating menu item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getMenuItem = async (req, res) => {

    try {

    } catch (error) {

    }
}