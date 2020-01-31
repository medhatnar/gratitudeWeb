from datetime import datetime
from app import db


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer,
                   primary_key=True)
    username = db.Column(db.String(64),
                         index=False,
                         unique=True,
                         nullable=False)
    email = db.Column(db.String(120),
                      index=True,
                      unique=True,
                      nullable=False)
    created_at = db.Column(db.DateTime,
                           index=False,
                           nullable=False, default=datetime.utcnow)
    password_hash = db.Column(db.String(128))

    gratitudes = db.relationship(
        "Gratitude", backref=db.backref('author', lazy=True))

    def __repr__(self):
        return '<User {}>'.format(self.username)


class Gratitude(db.Model):
    __tablename__ = 'gratitude'
    id = db.Column(db.Integer,
                   primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    body = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime,
                           default=datetime.utcnow,
                           index=False,
                           unique=False,
                           nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    meditation_id = db.Column(db.Integer, db.ForeignKey(
        'meditation.id'))
    meditation = db.relationship('Meditation', uselist=False)
``
    def __repr__(self):
        return '<Gratitude {}>'.format(self.title)


class Meditation(db.Model):
    __tablename__ = 'meditation'

    id = db.Column(db.Integer,
                   primary_key=True)
    name = db.Column(db.String(64), index=False, unique=True, nullable=False)
    link = db.Column(db.String(128), index=False, unique=True, nullable=False)

    def __repr__(self):
        return '<Meditation {}>'.format(self.title)
