"""Routes for logged-in account pages."""
from flask import Blueprint, render_template

landing_bp = Blueprint('landing_bp', __name__,
                       template_folder='templates', static_folder='../../dist')


@landing_bp.route('/')
@landing_bp.route('/landing', methods=['GET'])
def landing():
    return render_template('index.html')
