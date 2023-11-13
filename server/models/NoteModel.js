const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    folderId: {
        type: String,
        required: true
    },
    content: {
        type: String,
    }
}, { timestamps: true });

const NoteModel = mongoose.model("Note", NoteSchema);

export default NoteModel;