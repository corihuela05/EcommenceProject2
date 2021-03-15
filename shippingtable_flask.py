import flask
from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy #import flask SQLAlchemy

app = flask.Flask("__main__")

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL__ER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'gmfdatabase'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/gmfdatabase'
app.config['sqlarchemy_track_modifications']=False

db = SQLAlchemy(app)


class shipping (db.Model):
    Id_Number = db.Column(db.String(12), primary_key=True)
    fname_shipping = db.Column(db.String(20), unique=False)
    lname_shipping = db.Column(db.String(20), unique=False)
    Address1_shipping = db.Column(db.String(50), unique=False)
    Address2_shipping = db.Column(db.String(50), unique=False)
    county_shipping = db.Column(db.String(50), unique=True)
    city_shipping= db.Column(db.String(20), unique =False)
    zip_shipping= db.Column(db.Integer, unique=False)  
    phone_shipping= db.Column(db.String(20), unique=True) 
    delivery_shipping= db.Column(db.String(20), unique=True) 

db.create_all()
entry=shipping(Id_Number= 1,fname_shipping= "Crystal Rodriguez",lname_shipping= "Johnson",Address1_shipping="265 Columbus Drive",
               Address2_shipping=None,county_shipping="New York", city_shipping="New York City",zip_shipping=1001,phone_shipping="201-777-8927",
               delivery_shipping="regular")
db.session.add(entry)
db.session.commit()

def remove_entry(id_number):
    # Example delete of user
        db.session.delete(id_number(1))
        db.session.commit()
def mofify_entry():
  db.sesson.update(user = User.query.filter_by(Id_Number=2).first())
  db.commit()
@app.route("/")
def my_index():
        return flask.render_template("index.html", token= "Hello")
app.run(debug=True)
