from flask import Flask, render_template
from landing import routes

app = Flask(__name__, instance_relative_config=False)

app.config.from_object('config.Config')
app.register_blueprint(routes.landing_bp)
