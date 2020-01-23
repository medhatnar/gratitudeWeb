import os


class Config:
    """Base config vars."""
    TESTING = os.environ.get('TESTING')
    DEBUG = os.environ.get('DEBUG')