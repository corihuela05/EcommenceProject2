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



#'''insert function'''
#buyersprofile.insert(6)


#'''delete function'''
#buyersprofile.delete(0)

#'''edit function'''
#buyersprofile.edit(21,12)

@app.route("/")
def my_index():
        return flask.render_template("index.html", token= "Hello")
app.run(debug=True)