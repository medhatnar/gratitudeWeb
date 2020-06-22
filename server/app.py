from flask import Flask, render_template
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

from config import Config
# from routes import routes

db = SQLAlchemy()

app = Flask(__name__, static_folder='../dist', static_url_path='')

@app.route('/')
def index():
    return 'yooooo'

CORS(app)
app.config.from_object(Config)
# app.register_blueprint(routes.app_bp)

db.init_app(app)
migrate = Migrate(app, db)

login = LoginManager(app)

app.app_context().push()

from models.models import User, Gratitude, Meditation

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Meditation': Meditation, 'Gratitude': Gratitude}

from api.meditations import meditations_bp
app.register_blueprint(meditations_bp)

if __name__ == '__main__':
    app.run()
