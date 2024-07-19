require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const Auth = require('./models/auth.model');

const baseUrl = process.env.CLIENT_ORIGIN_URL === 'production' 
? 'https://expense-app-liart.vercel.app'
: 'http://localhost:3000';

app.use(cors({
    origin: baseUrl
}));

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start server
const PORT = process.env.PORT || 4000;
//apis
app.post('/register', async(req,res)=>{
    console.log('Received a registration requests');
    try {
        const { name, email, password } = req.body;
        let existingUser = await Auth.findOne({email});
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, email, and password are required' });
        }
        let newUser = new Auth({ name, email, password });
        await newUser.save();
        res.status(200).json({ message: 'ok' });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})
console.log('connecting to db');
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected!')
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    })
}).catch(()=> {
    console.log('failed')
})

module.exports = app;