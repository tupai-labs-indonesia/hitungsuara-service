const mongoose = require('mongoose');
const crypto = require('crypto');
const {isEmail} = require('validator');


const addressSchema = mongoose.Schema({
    address1: {type: String},
    city: {type: String}
});

// User Schema
const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {
        type: String,
        required: true,
        validate: [isEmail, 'invalid email'],
        lowercase: true,
        unique: true
      },
    hash: {type: String},
    salt: {type: String},
    phoneNumber: {type: String},
    address: addressSchema,
    tps: {type: String},
    dapil_id: {type: String},
    team_id: {type: String},
    photo: {type: String},
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

    userSchema.methods.setPassword = function(password) {
     
    // Creating a unique salt for a particular user
       this.salt = crypto.randomBytes(16).toString('hex');
     
    // Hashing user's salt and password with 1000 iterations, 64 length and sha512 digest
       this.hash = crypto.pbkdf2Sync(password, this.salt, 
       1000, 64, `sha512`).toString(`hex`);
   };

    userSchema.methods.validPassword = function(password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
    return this.hash === hash;
    };

const User = module.exports = mongoose.model('User', userSchema);
