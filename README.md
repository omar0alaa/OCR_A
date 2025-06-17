# Arabic OCR Web App

This is a simple web application for extracting Arabic text from images using OCR (Optical Character Recognition).

## Features
- Upload images containing Arabic text
- Extract and display recognized Arabic text using Tesseract OCR
- Download the extracted text as a .txt file
- Simple, modern web interface (RTL support, dark/light mode, glassmorphism)

## Requirements
- Python 3.7+
- Tesseract OCR with Arabic language data installed on your server

## Installation
1. Clone or upload this project to your server.
2. Install Python dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Install Tesseract OCR and Arabic language data:
   - **Ubuntu/Linux:**
     ```
     sudo apt update
     sudo apt install tesseract-ocr tesseract-ocr-ara
     ```
   - **Windows:**
     1. Download the Tesseract installer from [UB Mannheim releases](https://github.com/UB-Mannheim/tesseract/wiki).
     2. Run the installer and follow the instructions.
     3. Make sure to add the Tesseract installation directory to your system PATH.
     4. During installation, select Arabic language data or download `ara.traineddata` from [tessdata](https://github.com/tesseract-ocr/tessdata) and place it in the `tessdata` folder inside your Tesseract installation directory.

## Usage
1. Start the Flask app:
   ```
   python app.py
   ```
2. Open your browser and go to `http://<your-server-ip>:<your-set-port>/`
3. Upload an image with Arabic text and view or download the extracted text.

## Notes
- For production, consider using Gunicorn (Linux) or Waitress (Windows) and a reverse proxy (like Nginx).
- Uploaded files are automatically deleted after processing.

## License
MIT
