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

def getusertype(db):
    
    class usertypeTable:
        def __init__(self,db):
            self.db=db
            class user(self.db.Model):
                Type = db.Column(db.String(4), primary_key=True)
                Description_Type = db.Column(db.Text, unique=False)
               
                
                def __repr__(self):                         
                    return '<User %r>' % self.Type
            self.users=users
        def insert(self,id):
            entry=self.users(Type=id)
            self.db.session.add(entry)
            self.db.session.commit()
        def delete(self,id):
            entry=self.users.query.filter_by(Type=id).delete()
            self.db.session.commit()
        def edit(self,id,to):
            entry=self.users.query.filter_by(Type=id).first()
            entry.Type=to
            self.db.session.commit()

    return usertypeTable(db)
