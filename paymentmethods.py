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

db = SQLAlchemy(app)

def getpaymentmethods(db):
    
    class paymentMethodsTable:
        def __init__(self,db):
            self.db=db
            class paymentmethods(self.db.Model):
                MethodType_Pay = db.Column(db.String(5), primary_key=True)
                Description = db.Column(db.Text, unique=False)

                def __repr__(self):                         
                    return '<User %r>' % self.MethodType_Pay
            self.paymentmethods=paymentmethods
        def insert(self,id):
            entry=self.paymentmethods(MethodType_Pay=id)
            self.db.session.add(entry)
            self.db.session.commit()
        def delete(self,id):
            entry=self.paymentmethods.query.filter_by(MethodType_Pay=id).delete()
            self.db.session.commit()
        def edit(self,id,to):
            entry=self.paymentmethods.query.filter_by(MethodType_Pay=id).first()
            entry.MethodType_Pay=to
            self.db.session.commit()

    return paymentmethodsTable(db)
