require('dotenv').config();
const express = require('express');
const router = require('./src/routes/routes');

// Express app initialized, Port and API_KEY imported
const app = express();
const port = process.env.PORT;

// Home route
app.get('/', (req, res)=>{
    res.send('Welcome to week-13');
})

app.use('/', router);

app.listen(port, ()=>{
    console.log(`Server listening to port ${port}`);
})
