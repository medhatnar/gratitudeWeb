from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from config import Config
from landing import routes

db = SQLAlchemy()

app = Flask(__name__, instance_relative_config=False)

app.config.from_object(Config)
app.register_blueprint(routes.landing_bp)

db.init_app(app)
migrate = Migrate(app, db)

app.app_context().push()

from models import User, Gratitude, Meditation

