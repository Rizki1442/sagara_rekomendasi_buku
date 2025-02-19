from flask import Flask, render_template

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/rekomendasi')
def rekomendasi():
    return render_template('rekomendasi.html')

@app.route('/erd')
def erd():
    return render_template('ERD.html')


if __name__ == '__main__':
    app.run(debug=True)
