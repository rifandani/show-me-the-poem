const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const PoemSchema = new mongoose.Schema({
  author: {
    type: String,
    required: [true, 'Tolong berikan nama penulis'],
    unique: true,
    trim: true,
  },
  title: {
    type: String,
    required: [true, 'Tolong berikan judul'],
    trim: true,
    maxlength: [30, 'Judul tidak boleh melebihi 30 karakter'],
  },
  description: {
    type: String,
    required: [true, 'Tolong berikan isi puisi atau lyric'],
    minlength: [30, 'Deskripsi tidak boleh kurang dari 30 karakter'],
    maxlength: [1000, 'Deskripsi tidak boleh lebih dari 1000 karakter'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Export the model
module.exports = mongoose.models.Poem || mongoose.model('Poem', PoemSchema);
