const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    bankResponse: { type: Object },
    status: { type: String, enum: ['pending','success','failed'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);