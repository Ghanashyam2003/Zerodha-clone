const { Schema } = require("mongoose");

const PositionSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isloss: Boolean,
});

module.exports = { PositionSchema };