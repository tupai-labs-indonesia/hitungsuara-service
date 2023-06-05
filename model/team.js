const mongoose = require('mongoose');

// Team Schema
const teamSchema = mongoose.Schema({
    name: {type: String, required: true, uppercase: true},
    category: {type: String, required: true},
    is_active: {type: Boolean},
    photo: {type: String},
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Team = module.exports = mongoose.model('Team', teamSchema);
