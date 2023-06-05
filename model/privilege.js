const mongoose = require('mongoose');

// Candidate Schema
const privilegeSchema = mongoose.Schema({
    name: {type: String, required: true},
    is_active: {type: Boolean},
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


const Privilege = module.exports = mongoose.model('Privilege', privilegeSchema);
