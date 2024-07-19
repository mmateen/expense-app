const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AuthSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter the name"]
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
},{
    timestamps: true
});

AuthSchema.pre('save', async function(next) {
    try {
        console.log('object', this.password)
        if(!this.isModified('password')) {
            return next();
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    catch(err) {
        next(err);
    }
})
const Auth = mongoose.model("auth", AuthSchema);
module.exports = Auth;