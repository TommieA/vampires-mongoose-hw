const mongoose = require('mongoose');

const vampireSchema = new mongoose.Schema({
    name: {type: String, required: [true, "You must name your Vampire"]},
    hair_color: {type: String, default: "blonde"},
    eye_color: {type: String},
    dob: {type: Date},
    loves: [String],
    Location: {type: String},
    gender: {type: String},
    victims: {type: Number, min: [0, 'Cannot have a negative number of victims']},
});

const Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = vampire;