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
db = MySQL(app)

'''
db = MySQL(app)
db.connect()
cur = db.connection.cursor()      
'''
db = SQLAlchemy(app)


### adds table, just for testing connection ###
class paymentmethod (db.Model):
    Id_Number_paymentmethod = db.Column(db.String(50), primary_key=True)
    Fullname_paymentmethod = db.Column(db.String(50), primary_key=True)
    CardNum_paymentmethod = db.Column(db.String(16), unique=True)
    ExpDate_payment= db.column(db.date(8), unique=True)
    CRV_paymentmethod= db.column(db.Integer(3), unique=True)
    def __init__(self, Id_Number_paymentmethod,Fulllname_paymentmethod, CardNum_paymentmethod, ExpDate_payment , CRV_paymentmethod):
        self.Id_Number_paymentmethod = Id_Number_paymentmethod
        self.Fulllname_paymentmethod = ID_Fulllname_paymentmethod
        self.CardNum_paymentmethod = CardNum_paymentmethod
        self.ExpDate_payment=ExpDate_payment
        self.CRV_paymentmethod=CRV_paymentmethod
db.create_all()
#Entry 1

entry1=(Id_Number_paymentmethod = 1, Fullname_paymentmethod="Crystal Rodriguez", CardNum_paymentmethod=1234566770001234556, ExpDate_payment=10/20/21, CRV_paymentmethod=123)
db.session.commit()

#Entry 2
entry2= (Id_Number_paymentmethod 2, ID_Fulllname_paymentmethod. a="James Rodriguez", CardNum_paymentmethod= 10245677851253333)
4/20/21, CRV_Paymentmethod=423)
db.session.commit()



def delete_entry(db.model):
    db.session.delete(Id_Number_paymentmethod=1)
    db.session.commit()

def modify_entry ():
    db.session.update(user= User.query.filter_by(Id_Number_paymentmethod=2).first()
    db.commit()

@app.route("/")
def my_index():12
        return flask.render_template("index.html", token= "Hello")

app.run(debug=True) 
