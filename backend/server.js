const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 5000; // Choose a port for your backend server

// Middleware to enable CORS for all origins
app.use(cors());

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// Unsecure Sign-Up Endpoint
app.post('/signup', (req, res) => {
    // THIS IS THE UNSECURE ENDPOINT:
    // We are directly logging the received data without any validation,
    // sanitization, or checks for malicious content, length, or format.
    // In a real unsecure scenario, this data might be directly
    // inserted into a database, leading to SQL injection, XSS, etc.

    const { username, email, phoneNumber, password, confirmPassword } = req.body;

    console.log('--- RECEIVED UNSECURE SIGN-UP DATA ---');
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Phone Number: ${phoneNumber}`);
    console.log(`Password: ${password}`);
    console.log(`Confirm Password: ${confirmPassword}`);
    console.log('-------------------------------------');

    // Simulate a successful response as if the data was "processed"
    // even though it was not validated.
    res.status(200).json({ message: 'Sign-up data received (unvalidated)!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Node.js Unsecure Backend listening at http://localhost:${port}`);
    console.log('Ready to receive unvalidated sign-up data.');
});