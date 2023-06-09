const mongoose = require('mongoose');

// Party Schema
const partySchema = mongoose.Schema({
    alias: {type: String, required: true, uppercase: true},
    name: {type: String, required: true},
    ballot_number: {type: Number},
    photo: {type: String},
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Party = module.exports = mongoose.model('Party', partySchema);
