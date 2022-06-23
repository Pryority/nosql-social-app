const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trimmed: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trimmed: true
  },
  thoughts: [],
  friends: []
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;
