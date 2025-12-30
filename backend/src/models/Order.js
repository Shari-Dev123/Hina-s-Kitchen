import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    items: [
        {name: String, quantity: Number, price: Number},
    ],
    deliveryDate: String,
    deliveryTime: String,
    notes: String,
    customerName: String,
    contact: String,
},
{timestamps: true})


export default mongoose.model("Order", orderSchema);