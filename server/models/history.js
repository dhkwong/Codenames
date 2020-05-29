const mongoose = require('mongoose');
const HistorySchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, default: '', },
}, {timestamps: true });
mongoose.model('History', HistorySchema);
