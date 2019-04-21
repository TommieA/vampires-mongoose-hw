const mongoose = require('mongoose');

const vampireSchema = new mongoose.Schema({
    name: { type: String, required: [true, "You must name your Vampire"]},
    hair_color: { type: String, default: "blonde"},
    eye_color: String,
    dob: Date,
    loves: String,
    Location: String,
    gender: String,
    victims: { type: Number, min: 0},
});

const Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = vampire;