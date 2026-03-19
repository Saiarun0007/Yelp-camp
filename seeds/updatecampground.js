const mongoose = require("mongoose");
const Campground = require("../models/campground"); // adjust path if needed

// ✅ MongoDB connection
mongoose
    .connect("mongodb://127.0.0.1:27017/yelp-camp")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(err => {
        console.error("Mongo connection error:", err);
    });

// const AUTHOR_ID = mongoose.Types.ObjectId("698b58103782af697e2442f3");

const updateCampgrounds = async () => {
    try {
        const result = await Campground.updateMany(
            { author: { $exists: false } }, // safer: only missing authors
            { $set: { author: '698b58103782af697e2442f3' } }
        );

        console.log("Update result:", result);
    } catch (err) {
        console.error("Error updating campgrounds:", err);
    } finally {
        mongoose.connection.close();
    }
};

updateCampgrounds();

console.log("Update process complete. Check console for results.se");