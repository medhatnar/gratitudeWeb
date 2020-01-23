from app import app
@app.route('/')
@app.route('/landing')
def landing():
    return render_template()