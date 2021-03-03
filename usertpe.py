import flask
from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy #import flask SQLAlchemy

app = flask.Flask("__main__")

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL__ER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'gmfdatabase'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/gmfdatabase'
#app.config['sqlarchemy_track_modifications']=False
'''
db = MySQL(app)
db.connect()
cur = db.connection.cursor()      
'''
db = SQLAlchemy(app)


### adds table, just for testing connection ###
class userstype (db.Model):
    ID-type = db.Column(db.varchar(12), primary_key=True)
    description_type = db.Column(db.text(50), unique=True)
    def __init__(self, id-type, Description_usertype):
        self.ID_type = id_type
        Desciption_type = Description_type
db.create_all()
''' 
db.session.add(usertype(id_type= "buyer" )) 
b.session.add(usertype(description= "From Arizona" ))
db.session.add(usertype(id_type= " partner" )) 
db.session.add(usertype(description= "lawyer" ))
db.session.add(usertype(id_type= " organization" )) 
db.session.add(usertype(description= "lawyer" ))

''' 
@app.route("/")
def my_index():
        return flask.render_template("index.html", token= "Hello")

app.run(debug=True) 