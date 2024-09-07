const vision = require('@google-cloud/vision');

// Create a client for Vision API
const client = new vision.ImageAnnotatorClient({
  keyFilename: '/Users/indreshmr/image-processing/nutrition-extraction-434817-a92664406df4.json', // Use the path to your downloaded JSON key
});

// Function to extract text from image using Vision API
async function extractText(imagePath) {
  try {
    // Perform text detection on the image file
    const [result] = await client.textDetection(imagePath);
    const detections = result.textAnnotations;
    
    if (detections && detections.length > 0) {
      console.log('Text:', detections[0].description);  // Log the detected text
      return detections[0].description;  // Return the detected text
    } else {
      throw new Error('No text detected'); // Handle case where no text is detected
    }
  } catch (error) {
    console.error('Error during text detection:', error); // Log the error
    throw error; // Re-throw the error so the route can catch it
  }
}

module.exports = extractText;