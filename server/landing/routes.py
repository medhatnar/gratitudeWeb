from app import app
@app.route('/')
@app.route('/welcome')
def welcome():
    return 'you are welcomed'