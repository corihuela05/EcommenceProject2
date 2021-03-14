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

#'''non profit table'''
from nonprofitprofile import getnonprofitprofile
nonprofitprofile=getnonprofitprofile(db)

#'''gmf profile table'''
from gmfprofile import getgmfprofile
gmfprofile=getgmfprofile(db)

#'''products table'''
from products import getproducts
products=getproducts(db)







#'''insert function'''
#buyersprofile.insert(6)


#'''delete function'''
#buyersprofile.delete(0)

#'''edit function'''
#buyersprofile.edit(21,12)

db.create_all()

@app.route("/")
def my_index():
        return flask.render_template("index.html", token= "Hello")
app.run(debug=True)