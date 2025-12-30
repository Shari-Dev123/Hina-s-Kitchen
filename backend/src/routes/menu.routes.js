import express from "express"
import { getMenu, addMenuItem } from "../controllers/menu.controller.js"

const router = express.Router();

router.get("/", getMenu)
router.post("/", addMenuItem)

export default router;