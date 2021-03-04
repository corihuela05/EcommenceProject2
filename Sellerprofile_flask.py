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

'''
### adds table, just for testing connection ###
class sellerprofile (db.Model):
    ID-Number_sellerprofile = db.Column(db.varchar(5), primary_key=True)
    revenue_sellerprofile = db.Column(db.text(50), unique=True)
    servces_sellerprofile=db.Columun
    def __init__(self, id-type, Description_usertype):
        self.methodtype = id_type
        self.description_payment = Description_type
db.create_all()
db.session.add(paymentmethods(id_method_pay= "card" )) 
b.session.add(paymentmethods(description= "American Express credit card" ))
'''
def remove_entry(db.model):
    db.session.delete(id_type)
    db.session.commit()
@app.route("/")
def my_index():
        return flask.render_template("index.html", token= "Hello")

app.run(debug=True) 