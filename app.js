const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8001;

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// MONGOOSE
mongoose.connect('mongodb://localhost/spacexClone', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

const db = mongoose.connection;
db.once('open', () => {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

db.on('error', () => {
    console.log(`MongoDB Error`);
});

// ROUTES
app.get('/', (req, res) => {
    res.json({ message: 'SEI 412 Space X Clone'});
});

app.get('/roadster', (req, res) => {
    const fetchRoadsters = async () => {
        Roadster.find({}, (err, roadsters) => {
            if (err)console.log(err);
            console.log(roadsters)
        });
    }
    
    fetchRoadsters();
})


app.listen(PORT, () => {
    console.log(`You are now listening to the smooth sounds of ${PORT} 🎧`);
});