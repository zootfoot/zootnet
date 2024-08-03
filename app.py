from flask import Flask, render_template
import os

app = Flask(__name__, static_folder='public', static_url_path='/')
app.config.update(
    SESSION_COOKIE_SECURE=True,
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE='Lax',
    SECRET_KEY=os.environ.get('SECRET_KEY'),
    SESSION_TYPE='filesystem'
)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/wx')
def wx():
    return render_template('wx.html')

@app.route('/proxy')
def proxy():
    return

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)