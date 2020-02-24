from datetime import datetime
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from app import db, login


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


class User(UserMixin, db.Model):
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

    is_authenticated = db.Column(db.Boolean, default=False, nullable=False)
    is_active = db.Column(db.Boolean, default=False, nullable=False)
    is_anonymous = db.Column(db.Boolean, default=True, nullable=False)

    gratitudes = db.relationship(
        "Gratitude", backref=db.backref('author', lazy=True))

    def password_gen(self, word):
        self.hash = generate_password_hash(word)

    def password_validator(self, word):
        return check_password_hash(self.password_hash, word)

    def get_id(self):
        return self.id

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
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    meditation_id = db.Column(db.Integer, db.ForeignKey(
        'meditation.id'))
    meditation = db.relationship('Meditation', uselist=False)

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
