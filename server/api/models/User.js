const uniqueValidator = require('mongoose-unique-validator');
const {Schema, model, Types} = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  username: {type: String, required: true},
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
    uniqueCaseInsensitive: true,
  },
  password: {type: String, required: true},
  role: {type: String}
});

UserSchema.plugin(uniqueValidator,
  {message: 'Error, expected {PATH} to be unique.'});

UserSchema.pre('save', function(next) {
  const User = this;

  // only hash the password if it has been modified (or is new)
  if (User.isModified('password')) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(User.password, salt, function(err, hash) {
        if (err) return next(err);

        User.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});


UserSchema.methods.validatePassword = function(data) {
  return bcrypt.compareSync(data, this.password);
};


module.exports = model('User', UserSchema);
