import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    Productname: { type: String, required: true },
    description: { type: String, required: true },
});
