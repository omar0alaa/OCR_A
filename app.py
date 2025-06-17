from flask import Flask, render_template, request, redirect, url_for, send_file
import pytesseract
from PIL import Image
import os
import cv2
import numpy as np
from waitress import serve

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads/'

# Ensure upload folder exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

@app.route('/', methods=['GET', 'POST'])
def index():
    text = None
    if request.method == 'POST':
        if 'image' not in request.files:
            return redirect(request.url)
        file = request.files['image']
        if file.filename == '':
            return redirect(request.url)
        if file:
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
            file.save(filepath)
            # Get Tesseract options from form
            psm = request.form.get('psm', '3')
            oem = request.form.get('oem', '3')
            # Preprocess image for better OCR accuracy
            img = cv2.imread(filepath, cv2.IMREAD_GRAYSCALE)
            img = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]
            img = cv2.medianBlur(img, 3)
            # Save preprocessed image temporarily
            preprocessed_path = filepath + '_pre.png'
            cv2.imwrite(preprocessed_path, img)
            # Set Tesseract to use Arabic language with user config
            custom_config = f'--oem {oem} --psm {psm}'
            text = pytesseract.image_to_string(Image.open(preprocessed_path), lang='ara+en', config=custom_config)
            os.remove(filepath)
            os.remove(preprocessed_path)
    return render_template('index.html', text=text)

@app.route('/download', methods=['POST'])
def download():
    text = request.form.get('text')
    if not text:
        return redirect(url_for('index'))
    with open('extracted.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    return send_file('extracted.txt', as_attachment=True, download_name='extracted.txt', mimetype='text/plain')

if __name__ == '__main__':
    # For production, use Waitress WSGI server
    serve(app, host='0.0.0.0', port=11001)
