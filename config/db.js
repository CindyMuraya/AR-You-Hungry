// Purpose: Connect to MongoDB using mongoose
const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://cindymuraya:Nancy2k02@aryouhungry.2iezaag.mongodb.net/?retryWrites=true&w=majority&appName=ARYouHungry', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;