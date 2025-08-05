const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173', // ← your Vite frontend URL
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const applicantRoutes = require('./routes/applicant');
app.use('/api/applicant', applicantRoutes);

app.get('/', (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
