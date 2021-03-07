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

def getcardcreditionals(db):
    
    class cardcreditionalsTable:
        def __init__(self,db):
            self.db=db
            class cardcreditionals(self.db.Model):
                MethodType_CardCrediontials = db.Column(db.String(3), primary_key=True)
	        FullName_cardcreditionals = db.Column(db.text, unique=False)
	        CardNum_cardcreditionals = db.Column(db.varchar(16), unique=False)
	        ExpDate_cardcreditionals = db.Column(db.Date, unique=False)
                CRV_cardcreditionals = db.Column(db.String(3), primary_key=False)
                Amount = db.Column(db.Integer, unique=False)
                
         def __repr__(self):                         
            return '<User %r>' % self.CRV-cardcreditionals
            self.sellersprofile=sellersprofile
        def insert(self,id):
            entry=self.sellersprofile(CRV-cardcreditionals=id)
            self.db.session.add(entry)
            self.db.session.commit()
        def delete(self,id):
            entry=self.sellersprofile.query.filter_by(CRV-cardcreditionals=id).delete()
            self.db.session.commit()
        def edit(self,id,to):
            entry=self.sellersprofile.query.filter_by(CRV-cardcreditionals=id).first()
            entry.CRV-cardcreditionals=to
            self.db.session.commit()

    return cardcreditionalsTable(db)
