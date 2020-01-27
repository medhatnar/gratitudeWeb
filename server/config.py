from os import environ, path
basedir = path.abspath(path.dirname(__file__))


class Config:
    """Base config vars."""
    TESTING = environ.get('TESTING')
    DEBUG = environ.get('DEBUG')

    # Database
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = environ.get(
        'SQLALCHEMY_TRACK_MODIFICATIONS')
