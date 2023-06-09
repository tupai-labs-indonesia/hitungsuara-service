const mongoose = require('mongoose');

// Dapil Schema
const dapilSchema = mongoose.Schema({
    city: {type: String, required: true, uppercase: true},
    province: {type: String, required: true, uppercase: true},
    number: {type: Number},
    photo: {type: String},
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Dapil = module.exports = mongoose.model('Dapil', dapilSchema);
