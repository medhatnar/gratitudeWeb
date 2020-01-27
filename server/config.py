from os import environ

class Config:
    """Base config vars."""
    TESTING = os.environ.get('TESTING')
    DEBUG = os.environ.get('DEBUG')

    # Database
    SQLALCHEMY_DATABASE_URI = environ.get('SQLALCHEMY_DATABASE_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = environ.get('SQLALCHEMY_TRACK_MODIFICATIONS')

