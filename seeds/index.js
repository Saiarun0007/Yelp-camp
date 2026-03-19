const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');
const campground = require('../models/campground');

//image: `https://picsum.photos/400?random=${Math.random()}

mongoose.connect('mongodb://localhost:27017/yelp-camp-maptiler');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 20);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            image: [
                {
                    url: 'https://res.cloudinary.com/ddbzzywww/image/upload/v1772367659/YelpCamp/sa2bhcetr4hebityiqhb.jpg',
                    filename: 'YelpCamp/sa2bhcetr4hebityiqhb'
                },
                {
                    url: 'https://res.cloudinary.com/ddbzzywww/image/upload/v1772367659/YelpCamp/md7tgkofcwv9dg3yrcth.jpg',
                    filename: 'YelpCamp/md7tgkofcwv9dg3yrcth'
                }
            ],
            description: "this is just discriptions and not  sure whatt happend",
            price: price,
            author: '69aefb8ab4aa2929d3f69cf4'

        })
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
});
// const sample = array => array[Math.floor(Math.random() * array.length)];


// const seedDB = async () => {
//     await Campground.deleteMany({});
//     for (let i = 0; i < 50; i++) {
//         const random1000 = Math.floor(Math.random() * 1000);
//         const camp = new Campground({
//             location: `${cities[random1000].city}, ${cities[random1000].state}`,
//             title: `${sample(descriptors)} ${sample(places)}`
//         })
//         await camp.save();
//     }
// }

// seedDB().then(() => {
//     mongoose.connection.close();
// })