from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

from landing import routes

db = SQLAlchemy()

def create_app():
    """Construct the core application."""
    app = Flask(__name__, instance_relative_config=False)

    app.config.from_object('config.Config')
    app.register_blueprint(routes.landing_bp)

    db.init_app(app)

    with app.app_context():
        from . import routes
        
        db.create_all()

