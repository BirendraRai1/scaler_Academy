const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Hash password before saving the user
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to compare entered password with hashed password
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

/*t's a custom instance method that you define yourself directly on the Mongoose schema using
 UserSchema.methods
*
****/ 

module.exports = mongoose.model('User', UserSchema);


/*The this.isModified method in your Mongoose User schema pre-save hook comes from Mongoose's 
Document instances.

isModified(path): This method checks if a specific path (a field) in the document has been modified 
since it was last retrieved from the database or since it was last saved.

If you're creating a new user (const user = new User({ username, password });), the password field is
 "modified" because it's being set for the first time. So, this.isModified('password') will return true.

If you're updating an existing user and you don't change their password, this.isModified('password')
 will return false, and the hook will skip the password hashing step, preventing unnecessary re-hashing
  of an already hashed password. This is good for performance and prevents breaking password comparison
   if you accidentally re-hash it.


*
*
*****/ 