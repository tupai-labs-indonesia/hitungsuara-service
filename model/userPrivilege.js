const mongoose = require('mongoose');

// Candidate Schema
const userPrivilegeSchema = mongoose.Schema({
    user_id: {type: String, required: true},
    privilege_id: {type: String, required: true},
    created_by: {type: String, required: true},
    updated_by: {type: String, required: true},
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


const usePrivilege = module.exports = mongoose.model('UserPrivilege', userPrivilegeSchema);
