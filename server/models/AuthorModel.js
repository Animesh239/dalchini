const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    name: {
      type: String,
      required: true
    }
}, { timestamps: true })

const AuthorModel = mongoose.model("Author", AuthorSchema);

module.exports = AuthorModel;
