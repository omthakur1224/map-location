const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [ true, "Please enter your Name" ],
        },
        email: {
            type: String,
            required: [ true, "Please enter an Email!" ],
            unique: [ true, "Email Exist" ],
        },

        password: {
            type: String,
            required: [ true, "Please provide a password!" ],
            unique: false,
        },
    }, {
    versionKey: false,
    timestamps: true
}
);

module.exports = mongoose.model('user', userSchema);