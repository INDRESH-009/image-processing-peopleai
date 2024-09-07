
# Image Processing for Health App

## Overview

This folder contains the code necessary for processing images using the Google Cloud Vision API. The functionality includes handling file uploads, extracting text from images, and integrating with the Vision API to analyze food packaging for nutritional information.

## Folder Structure

- **app.js**: Sets up the Express server, handles file uploads, and processes images using the `imageProcessor.js` module.
- **imageProcessor.js**: Contains the logic for interacting with the Google Cloud Vision API to extract text from images.
- **uploads/**: Directory where uploaded images are temporarily stored.
- **README.md**: Documentation file for the project.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/INDRESH-009/image-processing-peopleai.git
   cd image-processing
   ```

2. **Install Dependencies**

   Make sure you are in the `image-processing` directory, then install the required packages:

   ```bash
   npm install express @google-cloud/vision multer
   ```

3. **Set Up Google Cloud Vision API**

   - Follow the steps to create a Google Cloud project and enable the Vision API.
   - Download the JSON key file for authentication and place it in the project directory.
   - Update `imageProcessor.js` with the path to your JSON key file.

## Configuration

1. **Google Cloud Vision API Key**

   Update the path to your Google Cloud Vision API key in `imageProcessor.js`:

   ```javascript
   const client = new vision.ImageAnnotatorClient({
     keyFilename: 'path/to/your/new-keyfile.json',
   });
   ```

2. **Server Port**

   The server runs on port 3000 by default. To change the port, modify the `PORT` variable in `app.js`.

## Usage

1. **Start the Server**

   Run the following command to start the Express server:

   ```bash
   node app.js
   ```

   The server will start and listen on port 3000.

2. **Upload an Image**

   You can upload an image by sending a POST request to `http://localhost:3000/upload` with the image file included in the form-data under the key `foodImage`.

   Example using `curl`:

   ```bash
   curl -F "foodImage=@/path/to/your/image.jpg" http://localhost:3000/upload
   ```

   Or use a tool like Postman to send the POST request with the image file.

## Error Handling

- **500 Internal Server Error**: Check the server logs for detailed error messages. Common issues include incorrect API key configuration or issues with the image file.
- **Multer Errors**: Ensure the field name in the form-data matches `foodImage` and the file is being correctly uploaded.

## Troubleshooting

1. **Permission Denied**: Ensure billing is enabled for your Google Cloud project. Follow the instructions [here](https://console.developers.google.com/billing/enable?project=<your-project-id>).

2. **File Upload Issues**: Verify that the file is being correctly uploaded to the `uploads/` directory. Check for any issues in file permissions.

## Contribution

If you wish to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a clear description of the changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

