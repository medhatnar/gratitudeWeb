from app import db


class User(db.Model):
    __tablename__ = 'users'
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
                           unique=False,
                           nullable=False)
    password_hash = db.Column(db.String(128))
    gratitudes = db.Column(db.Integer, db.ForeignKey('gratitudes.id'), nullable=True)

    def __repr__(self):
        return '<User {}>'.format(self.username)

class Gratitudes(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer,
                   primary_key=True)

    def __repr__(self):
        return '<User {}>'.format(self.username)