const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./Router/router');
// const bodyParser = require('body-parser');
const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

mongoose.connect('mongodb://localhost:27017/ReviewManager', 
    {useNewUrlParser: true, useUnifiedTopology: true}
).then(() => {
    console.log(`Connected to database - ReviewManager!`);
}).catch((error) => {
    console.log(`Error connecting to database -> ${error}`);
    process.exit();
});

app.get('/', (req, res) => {
    res.status(200).json({message: "Server running..."})
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});