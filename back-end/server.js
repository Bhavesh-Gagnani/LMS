const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON data

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.log("MongoDB Connection Error:", err));

// Define Contact Schema
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", contactSchema);

// API Route to Handle Contact Form Submission
app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        
        // Sending a color hint in the response
        res.status(201).json({ 
            message: "Thank you, we will contact you soon", 
            color: "green" 
        });
    } catch (error) {
        res.status(500).json({ 
            error: "Server error, please try again later.", 
            color: "red" 
        });
    }
});

app.get('/',(req,res)=>{
    res.send({
        activeStatus:true,
        error:false
    })
})

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
