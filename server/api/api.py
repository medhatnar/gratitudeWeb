
from flask_login import current_user, login_user
import app

@app.route('/users', methods=['GET', 'POST'])
def user_signup():
    with app.app_context()
        user = User(email=email, password=password, 



# /user post for creation
#/ create user
# respond with success or failure
# if failure redirect to home page/modal error displayed
# else success redirect to home page