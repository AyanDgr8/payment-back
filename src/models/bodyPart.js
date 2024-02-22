// src/models/bodyPart.js

import mongoose from 'mongoose';

// const mongoose = require('mongoose');

const bookformSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Please enter your Name"] 
    },

    phoneNumber: { 
        type: Number, 
        required: [true, "Phone number is required"], 
        unique: true,
        match: /^[0-9]{10}$/ 
    },

    email: { 
        type: String, 
        required: [true, "Mention your Email address"], 
        unique: true,
        match:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    },

    gender:{
        type: String,
        required: [true, "Select your Gender"]
    },

    purchaseType:{
        type: String, 
        required: [true, "Select one"]
    },
    
    selectedDate:{
        type: Date,
        required:[true,"Please select your date"]
    },

    selectedBodyParts: { 
        type: [String],
        required: [true, "Choose atleast one"] 
    },

    coupon:{
        type: String,
        default:'',
        required:false
    }

});


const UserDetailsBookform  = mongoose.model("UserDetailsBookform", bookformSchema);

export  { UserDetailsBookform };


