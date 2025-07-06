// backend/src/utils/jwt.js
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const payload = {
        user: {
            id: user.id,         
            email: user.email,   
            username: user.username 
        },
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (err) {
        return null;
    }
};

module.exports = { generateToken, verifyToken };

