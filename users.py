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

db = SQLAlchemy(app)

def getuser(db):
    
    class userTable:
        def __init__(self,db):
            self.db=db
            class user(self.db.Model):
                UserType_Users = db.Column(db.String(4), primary_key=True)
                Fname_Users = db.Column(db.Text, unique=False)
                Lname_Users = db.Column(db.text, unique=True)
                DOB_Users = db.Column(db.Date, unique=False)
                Email_Users = db.Column(db.String(20), unique=False)
                Location_Users = db.Column(db.text, unique=False)
                
                def __repr__(self):                         
                    return '<User %r>' % self.UserType_Users
            self.users=users
        def insert(self,id):
            entry=self.users(UserType_Users=id)
            self.db.session.add(entry)
            self.db.session.commit()
        def delete(self,id):
            entry=self.users.query.filter_by(UserType_Users=id).delete()
            self.db.session.commit()
        def edit(self,id,to):
            entry=self.users.query.filter_by(UserType_Users=id).first()
            entry.UserType_Users=to
            self.db.session.commit()

    return userTable(db)
