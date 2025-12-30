import Order from "../models/Order.js";
import formatWhatsAppMessage from "../utils/whatsappFormatter.js";

export async function createOrder(req, res) {
    const order = await Order.create(req.body)
    
    const whatsappText = formatWhatsAppMessage(order)

    req.status(201).json({
        success: true,
        whatsappText
    })
}