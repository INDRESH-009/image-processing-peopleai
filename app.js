const express = require('express');
const multer = require('multer');
const path = require('path');
const extractText = require('./imageProcessor'); // Import image processing function
const app = express();

// Set up Multer for file uploads with storage and file filter (only images)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append correct file extension
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true); // Accept the file if it's an image
  } else {
    cb(new Error('Not an image file'), false); // Reject non-image files
  }
};

const upload = multer({ storage, fileFilter });

// Set up the POST route to upload and process an image
app.post('/upload', upload.single('foodImage'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded or wrong file type'); // Handle no file or wrong type
    }
    const filePath = req.file.path;
    const extractedText = await extractText(filePath);
    res.json({ extractedText });
  } catch (error) {
    console.error('Error processing image:', error); // Log detailed error
    res.status(500).send('Error processing image');
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});