"""Routes for logged-in account pages."""
from flask import Blueprint

app_bp = Blueprint('app_bp', __name__, static_folder='../../dist', static_url_path='')


@app_bp.route('/')
def app():
    return app_bp.send_static_file('index.html')