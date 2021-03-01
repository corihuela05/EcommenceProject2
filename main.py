import flask
from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy

app = flask.Flask("__main__")

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'gmfdatabase'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/gmfdatabase'

'''
db = MySQL(app)
db.connect()
cur = db.connection.cursor()      
'''
db = SQLAlchemy(app)

'''
### adds table, just for testing connection ###
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True)

    def __init__(self, username, email):
        self.username = username
        self.email = email

    def __repr__(self):
        return '<User %r>' % self.username
db.create_all()
'''

@app.route("/")
def my_index():
        return flask.render_template("index.html", token= "Hello")
app.run(debug=True)