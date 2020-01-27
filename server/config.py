from os import environ
basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    """Base config vars."""
    TESTING = environ.get('TESTING')
    DEBUG = environ.get('DEBUG')

    # Database
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = environ.get(
        'SQLALCHEMY_TRACK_MODIFICATIONS')
