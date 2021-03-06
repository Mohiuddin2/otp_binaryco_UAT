const mongoose = require("mongoose")


const otpSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date, default: Date.now, index: { expires: 300} // Five minutes
    }


}, {
    timestamps: true
})

module.exports = mongoose.model("Otp", otpSchema);


