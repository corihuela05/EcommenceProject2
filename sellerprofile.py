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

def getsellerprofile(db):
    
    class sellerProfileTable:
        def __init__(self,db):
            self.db=db
            class sellerprofile(self.db.Model):
                Number_SellerProfile = db.Column(db.Integer, primary_key=True)
                Revenue_sellerprofile = db.Column(db.Text, unique=False)
                CategoryOfService_sellerprofile = db.Column(db.String(25), unique=True)
                NumberOfSales_sellerprofile = db.Column(db.Integer, unique=False)
                Revisions_sellerprofile = db.Column(db.String(14), unique=False)
                UserType = db.Column(db.DateTime, unique=False)
                
                def __repr__(self):                         
                    return '<User %r>' % self.Number_SellerProfile
            self.sellersprofile=sellersprofile
        def insert(self,id):
            entry=self.sellersprofile(Number_SellerProfile=id)
            self.db.session.add(entry)
            self.db.session.commit()
        def delete(self,id):
            entry=self.sellersprofile.query.filter_by(Number_SellerProfile=id).delete()
            self.db.session.commit()
        def edit(self,id,to):
            entry=self.sellersprofile.query.filter_by(Number_SellerProfile=id).first()
            entry.Number_SellerProfile=to
            self.db.session.commit()

    return sellerProfileTable(db)
