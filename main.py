import flask
from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy

app = flask.Flask("__main__")

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'gmfdatabase'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/gmfdatabase'

'''buyers profile table'''
'''NOTE: change at - to _ in db for classes to work'''
db = SQLAlchemy(app)
class buyersprofile(db.Model):
    Number_BuyerProfile = db.Column(db.Integer, primary_key=True)
    Name_buyerprofile = db.Column(db.Text, unique=False)
    Address_buyerprofile = db.Column(db.String(25), unique=True)
    FirstPhone_buyerprofile = db.Column(db.Integer, unique=False)
    SecondaryPhone_buyerprofile = db.Column(db.String(14), unique=False)
    ProfileCreated_buyerprofile = db.Column(db.DateTime, unique=False)
    MoneyContributed = db.Column(db.Integer, unique=False)

    def __repr__(self):                         '''debugging'''
        return '<User %r>' % self.username
db.create_all() '''adds above info to sql'''
db.session.add(buyersprofile(Number_BuyerProfile=5 )) '''inserts info to table'''
db.session.commit() '''commits above insert into table'''

@app.route("/")
def my_index():
        return flask.render_template("index.html", token= "Hello")
app.run(debug=True)