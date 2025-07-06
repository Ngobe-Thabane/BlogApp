require('dotenv').config();
const express = require('express');

const cors = require('cors'); 
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: 'http://localhost:5173', 
    optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));
app.use(express.json()); 

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

