const mongoose  = require("mongoose");

const connectDb = async () => await mongoose.connect("mongodb://localhost:27017/paytm").then(()=>console.log("Database connected"));

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance:{
        type: Number,
        required: true
    }
});


// Create a model from the schema
const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account',accountSchema);
module.exports = {
    connectDb,
	User,
    Account
};
