require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const Auth = require('./models/auth.model');
const bcrypt = require('bcryptjs');

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

app.post('/login', async(req,res)=>{
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'email, and password are required' });
        }
        let user = await Auth.findOne({email});
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', name: user.name });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected!')
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    })
}).catch((err)=> {
    console.log('failed', err.message)
})

module.exports = app;