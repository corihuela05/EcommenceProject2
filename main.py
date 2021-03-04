import flask
from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy

app = flask.Flask("__main__")

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'gmfdatabase'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/gmfdatabase'

#'''buyers profile table'''
db = SQLAlchemy(app)
from buyersprofile import getbuyersprofile
buyersprofile=getbuyersprofile(db)

db.create_all() #'''adds above info to sql'''
db.session.add(buyersprofile(Number_BuyerProfile=25)) #'''inserts info to table'''
db.session.commit() #'''commits above insert into table'''

@app.route("/")
def my_index():
        return flask.render_template("index.html", token= "Hello")
app.run(debug=True)