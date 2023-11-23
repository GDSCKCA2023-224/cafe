
const mongoose = require(`mongoose`);
const bcrypt = require(`bcrypt`);

const customerSchema = new customerSchema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});


customerSchema.pre(`save`, async function (next) {
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
        
    } catch (error) {
        next(error);
    }
});
customerSchema.methods.comparePassword= async function(candidatePassword)
{
    try {
        const match = await bcrypt.compare(candidatePassword, this.password);
        return match;
        
    } catch (error) {
        return false;
    }
}

const Customer = mongoose.models.Customer  || mongoose.model('Customer ', customerSchema);

module.exports = Customer ;