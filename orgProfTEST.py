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

class OrganizationProfile (db.Model):
    Id_Number_orgpro = db.Column(db.Integer, primary_key=True)
    Name_orgpro = db.Column(db.String(20), unique=False)
    Description_orgpro = db.Column(db.String(20), unique=False)
    Username_organpro = db.Column(db.String(20), unique=False)
    Password_orgpro = db.Column(db.String(20), unique=False)
    Goals_orgpro= db.Column(db.String(20), unique =False) 
    Phone_shipping= db.Column(db.String(20), unique=False) 
    Address_orgpro=db.Column(db.String (50), unique=False)
    HomePhone_orgpro=db.Column(db.String(50), unique =False)
    SecondaryPhone_orgpro=db.Column(db.String(16), unique =False)
    Email_orgpro=db.Column(db.String(50), unique =False)
    Revenue_orgpro=db.Column(db.Integer, unique =False)
    Catofservice_orgpro=db.Column(db.String(15), unique= False)
    Product_orgpro=db.Column(db.String(15), unique= False)
    Id_number= db.Column(db.Integer, unique=False)
    Image_orgpro=db.Column(db.LargeBinary(800), unique=False)
    video_orgpro=db.Column(db.LargeBinary(800), unique=False)

db.create_all()

entry=OrganizationProfile(Id_Number_orgpro= 1, Name_orgpro= "Boys and girls club", Description_orgpro= "after schoool club", 
    Username_organpro="bG@gmail.com", Image_orgpro='boysandgitlsclub.jpg', video_orgpro="boysabdgirlsclub.mp4", 
    Address_orgpro="265 Columbus Drive", Goals_orgpro="gain more kids in thier program", HomePhone_orgpro="551-697-7898", 
    SecondaryPhone_orgpro="551-888-7858", Email_orgpro="BG@gmail.com", Revenue_orgpro=30000,
    Catofservice_orgpro="Community", Product_orgpro="after school program", Id_number=1)
'''
entry2=OrganizationProfile(Id_Number_orgpro= 2, Name_orgpro= "graciousgivers", Description_orgpro= "community for people in poverty", 
    Username_organpro="garciousgiversG@gmail.com", Image_orgpro= 'graciousgivers.jpg', video_orgpro='graciousgivers.mp3', 
    Address_orgpro="265 Columbus Drive", Goals_orgpro="bublicity",HomePhone_orgpro="201=785-9999", SecondaryPhone_orgpro="201-888-8888", 
    Email_orgpro="gg@gmail.com", Revenue_orgpro=415678, Catofservice_orgpro="Community", Product_orgpro="community", Id_number=2)
'''
entry=OrganizationProfile(Id_Number_orgpro=25)
db.session.add(entry)
#db.session.add(entry2)
db.session.commit()


def remove_entry(Id_number):
    # Example delete of user
    db.session.delete(Id_number(1))
    db.session.commit()

def mofify_entry():
  db.sesson.update(user = User.query.filter_by(Id_number=2).first())
  db.commit()
@app.route("/")
def my_index():
        return flask.render_template("index.html", token= "Hello")
app.run(debug=True)
