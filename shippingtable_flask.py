class shipping (db.Model):
    ID-Number = db.Column(db.varchar(12), primary_key=True)
    fname_shipping = db.Column(db.text(20), unique=True)
    lname_shipping = db.Column(db.text(20), unique=True)
    Address1_shipping = db.Column(db.varchar(50), unique=True)
    Address2_shipping = db.Column(db.varchar(50), unique=True)
    county_shipping = db.Column(db.varchar(50), unique=True)
    city_shipping= db.column (text(20), unique =true)
    zip_shipping= db.column (char(9), unique=true)  
    phone_shipping= db.column (text(20), unique=true) 
    delivery_shipping= db.column (text(20), unique=true) 
    def __init__(self, id-number, fname_shipping, lname_shipping, Address1_shipping, Address2_shipping, county_shipping, zip_shipping, city_shipping, phone_shipping,delivery_shipping ):
        self. id_number = id_number
        self.fname_shipping =fname_shipping
        self.lname_shipping=lname_shipping
        self.Address1_shipping= Address1 _shipping
        self.Address2_shipping= Address1 _shipping
        self.county_shipping=county_shipping
        self.city_shipping=city_shipping
        self.zip_shipping=zip_shipping
        self.phone_shipping=phone_shipping
        self.delivery_shipping=delivery_shipping

db.create_all()

db.session.add(idnumber_shipping(id_number_shipping= 1123 )) 
b.session.add(fname_shipping(lname_shipping= "Joseph" ))
db.session.add(laname_shipping(lname_shipping= " Johnson" )) 
db.session.add(address1_shipping(Address1_shipping= "260 Columbus Drive" ))
db.session.add(address2_shipping(Address2_shipping= NULL )) 
db.session.add(county_shipping(city_shipping= "New York " ))
db.session.add(city_shipping(city_shipping= "New York City" ))
db.session.add(zip_shipping(zip_shipping= 1001 ))
db.session.add(phone_shipping(201-777-7727))
db.session.add(delivery_shipping "regular")
db.session.commit()

def remove_entry(db.model):
    # Example delete of user
        db.session.delete(id_number(1123))
        db.session.commit()
''''
@app.route("/")
def my_index():
        return flask.render_template("index.html", token= "Hello")

app.run(debug=True) 