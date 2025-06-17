# Arabic OCR Web App

This is a simple web application for extracting Arabic text from images using OCR (Optical Character Recognition).

## Features
- Upload images containing Arabic text
- Extract and display recognized Arabic text using Tesseract OCR
- Simple, modern web interface (RTL support)

## Requirements
- Python 3.7+
- Tesseract OCR with Arabic language data installed on your server

## Installation
1. Clone or upload this project to your server.
2. Install Python dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Install Tesseract OCR and Arabic language data (example for Oracle Linux):
   ```
   sudo dnf install tesseract tesseract-langpack-ara
   ```

## Usage
1. Start the Flask app:
   ```
   python app.py
   ```
2. Open your browser and go to `http://<your-server-ip>:5000/`
3. Upload an image with Arabic text and view the extracted text.

## Notes
- For production, consider using Gunicorn and a reverse proxy (like Nginx).
- Make sure the `uploads/` directory is writable by the app.

## License
MIT
