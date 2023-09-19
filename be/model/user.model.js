import mongoose from "mongoose";

// const uniqueValidator = require('mongoose-unique-validator')
import uniqueValidator from 'mongoose-unique-validator';
// var bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
    firstname: {
        type: String, lowercase: true, required: [true, 'First Name can not be blank'], match: [/^[a-zA-Z\\s]*$/, 'First Name is invalid']
    },
    lastname: {
        type: String, lowercase: true, required: [true, 'Last Name can not be blank'], match: [/^[a-zA-Z\\s]*$/, 'Last Name is invalid']
    },
    email: {
        type: String, lowercase: true, unique: true, required: [true, 'Email can not be blank'], match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email is invalid']
    },
    phone: {
        type: String,
        required: [true, 'Phone Number can not be blank']
    }  
   
}, {
    timestamps: true
});

//UserSchema.plugin(uniqueValidator)
UserSchema.plugin(uniqueValidator, { message: `Error, expected {PATH} to be unique that is {VALUE}` })


const User = mongoose.model('User', UserSchema);

export default User;