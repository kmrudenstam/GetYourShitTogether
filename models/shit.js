const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shitSchema = new Schema({
  item: { type: String, required: true },
  // type: { type: String, required: true },
  importance: { type: Number, required: true},
  sentiment: { type: Number, required: true},
  usefulness: { type: Number, required: true},
  replaceable: { type: Number, required: true},
  danger: { type: Number, required: true},
  journal: { type: String},
  rating: { type: Number },
  date: { type: Date, default: Date.now }
});

const Shit = mongoose.model("Shit", shitSchema);

module.exports = Shit;
