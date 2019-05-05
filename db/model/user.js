const connectMongoose = require('../index');

const userSchema = new connectMongoose.Schema({
    userId: String,
    password: String
});

module.exports = connectMongoose.model('users', userSchema);
