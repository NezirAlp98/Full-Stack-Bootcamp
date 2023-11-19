const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BardakSchema = new Schema({
  adi: String,
  fiyat: Number,
  indirimli: Boolean,
}); //collection adını verdiğmizde monngodb de bizim verdiğimiz adla oluşuyor.

module.exports = mongoose.model("Bardak", BardakSchema);
