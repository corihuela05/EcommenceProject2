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

def getpartnerprofile(db):
    
    class partnerProfileTable:
        def __init__(self,db):
            self.db=db
            class partnerprofile(self.db.Model):
                Number_PartnerProfile = db.Column(db.Integer, primary_key=True)
                FName_partnerprofile = db.Column(db.Text, unique=False)
		LName_partnerprofile = db.Column(db.Text, unique=False)
		Telephone_partnerprofile = db.Column(db.Integer, unique=False)
                Address_partnerprofile = db.Column(db.String(25), unique=True)
                Email_partnerprofile = db.Column(db.String(14), unique=False)
                CatagoryOfService_partnerprofile = db.Column(db.DateTime, unique=False)
                def __repr__(self):                         
                    return '<User %r>' % self.Number_PartnerProfile
            self.partnersprofile=partnersprofile
        def insert(self,id):
            entry=self.partnersprofile(Number_PartnerProfile=id)
            self.db.session.add(entry)
            self.db.session.commit()
        def delete(self,id):
            entry=self.partnersprofile.query.filter_by(Number_PartnerProfile=id).delete()
            self.db.session.commit()
        def edit(self,id,to):
            entry=self.partnersprofile.query.filter_by(Number_PartnerProfile=id).first()
            entry.Number_PartnerProfile=to
            self.db.session.commit()

    return partnerProfileTable(db)
