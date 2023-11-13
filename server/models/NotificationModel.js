const mongoose = require('mongoose');

const notficationSchema = new mongoose.Schema({
  content: {
    type: String,
  },
}, { timestamps: true });

const NotificationModel = mongoose.model('Notification', notficationSchema);

module.exports = NotificationModel;