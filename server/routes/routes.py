"""Routes for logged-in account pages."""
from flask import Blueprint, render_template

app_bp = Blueprint('app_bp', __name__,
                   template_folder='templates', static_folder='dist', static_url_path="")


@app_bp.route('/')
def app():
    return render_template('index.html')