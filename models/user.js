const mongooese = require('mongoose');
const Schema = mongooese.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
})
UserSchema.plugin(passportLocalMongoose.default || passportLocalMongoose);
module.exports = mongooese.model('User', UserSchema)
