from flask import Flask, render_template, request, redirect, url_for
import pytesseract
from PIL import Image
import os
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
            # Set Tesseract to use Arabic language
            text = pytesseract.image_to_string(Image.open(filepath), lang='ara')
            os.remove(filepath)
    return render_template('index.html', text=text)

if __name__ == '__main__':
    # For production, use Waitress WSGI server
    serve(app, host='0.0.0.0', port=11001)
