import MenuItem from "../models/MenuItem.js";

export async function getMenu(req, res) {
    const menu = await MenuItem.find({ isAvailable: true})
    res.json(menu);
}

export async function addMenuItem(req, res) {
    const item = await MenuItem.create(req.body);
    res.status(201).json(item)
}