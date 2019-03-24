let mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: {
        type: Array
    }
    
});

module.exports = mongoose.model("Order", orderSchema);