const mongoose = require('mongoose')

const FolderSchema = new mongoose.Schema({
   name: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    }
}, { timestamps: true })

const FolderModel = mongoose.model("Folder", FolderSchema);

module.exports = FolderModel;