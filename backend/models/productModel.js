import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    sizes: {
        type: Array,
        required: true,
    },
    image: {
        type: Array,
        required: true,
    },
    character:{
        type: String,
        required: true,
    },
    bestSeller:{
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
