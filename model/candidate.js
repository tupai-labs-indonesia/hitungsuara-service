const mongoose = require('mongoose');

// Candidate Schema
const candidateSchema = mongoose.Schema({
    name: {type: String, required: true},
    party_id: {type: String},
    ballot_number: {type: Number},
    photo: {type: String},
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Candidate = module.exports = mongoose.model('Candidate', candidateSchema);
