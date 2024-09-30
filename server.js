const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the admission form (HTML)
app.use(express.static('public'));

// Handle form submission
app.post('/submit-admission', (req, res) => {
    const { name, email, message } = req.body;
    
    // Here you can handle the data - store it in a database, send an email, etc.
    console.log(`Admission Inquiry Received: \n Name: ${name} \n Email: ${email} \n Message: ${message}`);
    
    // Respond back to the user
    res.send('Thank you for submitting your inquiry. We will get back to you soon!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
