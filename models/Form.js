const mongoose = require('mongoose');
const { Schema } = mongoose;

const FormSchema = new Schema({

});

const Form = mongoose.model('form', FormSchema);

module.exports = Form;