from flask import Flask, request, render_template
from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy

app = Flask("__main__")

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'gmfdatabase'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/gmfdatabase'

#'''buyers profile table'''
db = SQLAlchemy(app)
from buyersprofile import getbuyersprofile
buyersprofile=getbuyersprofile(db)

#'''non profit table'''
from nonprofitprofile import getnonprofitprofile
nonprofitprofile=getnonprofitprofile(db)

#'''gmf profile table'''
from gmfprofile import getgmfprofile
gmfprofile=getgmfprofile(db)

#'''products table'''
from products import getproducts
products=getproducts(db)







#'''insert function'''
#buyersprofile.insert(6)


#'''delete function'''
#buyersprofile.delete(0)

#'''edit function'''
#buyersprofile.edit(21,12)

db.create_all()

#Homepage

@app.route("/", methods=['GET', 'POST')
def index():
        if request.method == "POST":
            details = request.form
        return flask.render_template("index.html", token= "Hello")
app.run(debug=True)

#Shipping

@app.route("/shipping", methods=['GET', 'POST')
def shipping():
        if request.method == "POST":
            details = request.form
            FName_shipping = details['firstname']
            lName_shipping = details['lastname']
            Address1_shipping = details['address']
            Address2_shipping = details['address2']
            country_shipping = details['country']
            city_shipping = details['city']
            zip_shipping = details['zip/postal code']
            phone_shipping = details["phone number"]
            coupon = details["coupon"]
            delivery_shipping = "?"
            
            cur mysql.connection.cursor()
            cur.execute("INSERT INTO shipping(FName_shipping, lName_shipping, Address1_shipping, Address2_shipping, country_shipping, city_shipping, phone_shipping, delivery_shipping) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)", (FName_shipping, lName_shipping, Address1_shipping, Address2_shipping, country_shipping, city_shipping, phone_shipping, delivery_shipping))
            mysql.connection.commit()
            cur.close()
            return 'success'

        return flask.render_template("index.html", token= "Ho")
 
#Payment

@app.route("/payment", methods=['GET', 'POST')
def payment():
        if request.method == "POST":
            details = request.form
            FullName-cardcreditionals = details['chn']
            CardNum-cardcreditionals = details['cardnumberss']
            ExpDate-cardcreditionals = details['expmonth']
            CRV-cardcreditionals = details['cvv']
            Amount = "?"
            
            cur mysql.connection.cursor()
            cur.execute("INSERT INTO shipping(FullName-cardcreditionals, CardNum-cardcreditionals, ExpDate-cardcreditionals, CRV-cardcreditionals, Amount) VALUES (%s, %s, %s, %s, %s, %s)", (FullName-cardcreditionals, CardNum-cardcreditionals, ExpDate-cardcreditionals, CRV-cardcreditionals, Amount))
            mysql.connection.commit()
            cur.close()
            return 'success'

        return flask.render_template("index.html", token= "Hey")

#Product      

@app.route("/product", methods=['GET', 'POST')
def product():
        #if request.method == "POST":
            #details = request.form
            #product
            #photo
            #similar products: name, photo, url
            #reviews: title, description, photo(optional), written or product 
            
            #cur mysql.connection.cursor()
            #cur.execute("INSERT INTO shipping(FullName-cardcreditionals, CardNum-cardcreditionals, ExpDate-cardcreditionals, CRV-cardcreditionals, Amount) VALUES (%s, %s, %s, %s, %s, %s)", (FullName-cardcreditionals, CardNum-cardcreditionals, ExpDate-cardcreditionals, CRV-cardcreditionals, Amount))
            #mysql.connection.commit()
            #cur.close()
            #return 'success'

        return flask.render_template("index.html", token= "Hey")

#Cart

@app.route("/cart", methods=['GET', 'POST')
def cart():
        #if request.method == "POST":
            #details = request.form
            
            
            #cur mysql.connection.cursor()
            #cur.execute("INSERT INTO shipping(FullName-cardcreditionals, CardNum-cardcreditionals, ExpDate-cardcreditionals, CRV-cardcreditionals, Amount) VALUES (%s, %s, %s, %s, %s, %s)", (FullName-cardcreditionals, CardNum-cardcreditionals, ExpDate-cardcreditionals, CRV-cardcreditionals, Amount))
            #mysql.connection.commit()
            #cur.close()
            #return 'success'

        return flask.render_template("index.html", token= "Hey")

#NonProfit
@app.route("/nonprofit", methods=['GET', 'POST')
def nonprofit():
        #if request.method == "POST":
            #details = request.form
            
            
            #cur mysql.connection.cursor()
            #cur.execute("INSERT INTO shipping(FullName-cardcreditionals, CardNum-cardcreditionals, ExpDate-cardcreditionals, CRV-cardcreditionals, Amount) VALUES (%s, %s, %s, %s, %s, %s)", (FullName-cardcreditionals, CardNum-cardcreditionals, ExpDate-cardcreditionals, CRV-cardcreditionals, Amount))
            #mysql.connection.commit()
            #cur.close()
            #return 'success'

        return flask.render_template("index.html", token= "Hey")

#OrgProfile

@app.route("/organizationprofile", methods=['GET', 'POST')
def organizationprofile():
        if request.method == "POST":
            details = request.form
            Id_Nunber_OrgPro = "?"
            Name_orgpro = details[]
            Description_orgprofile = details[]
            Username_organizationprofile = details[]
            Password_organizationprofile = details[]
            Goals = details[]
            Phone_orgprofile = details[]
            Address_orgpro = details[]
            Homephone_ogpro = details[]
            Secondaryphone_orgpro = details[]
            Email_orgpro = details[]
            Revenue_orgpro = details[]
            catofservice_orgpro = details[]
            Product_orgpro = details[]
            ID_Number = details[]
            ID_Number_I = details[]
            ID_Number_vid = details[]


            cur mysql.connection.cursor()
            cur.execute("INSERT INTO shipping(Id_Nunber_OrgPro, Name_orgpro, Description_orgprofile, Username_organizationprofile, Password_organizationprofile, Goals, Phone_orgprofile, Address_orgpro,Homephone_ogpro, Secondaryphone_orgpro, Email_orgpro, Revenue_orgpro, catofservice_orgpro, Product_orgpro, ID_Number, ID_Number_I,ID_Number_vid) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", (Id_Nunber_OrgPro, Name_orgpro, Description_orgprofile, Username_organizationprofile, Password_organizationprofile, Goals, Phone_orgprofile, Address_orgpro,Homephone_ogpro, Secondaryphone_orgpro, Email_orgpro, Revenue_orgpro, catofservice_orgpro, Product_orgpro, ID_Number, ID_Number_I,ID_Number_vid))
            mysql.connection.commit()
            cur.close()
            return 'success'

        return flask.render_template("index.html", token= "Hey")


#Profile

@app.route("/profile", methods=['GET', 'POST')
def profile():
        if request.method == "POST":
            details = request.form
            
            
            #cur mysql.connection.cursor()
            #cur.execute("INSERT INTO shipping(FullName-cardcreditionals, CardNum-cardcreditionals, ExpDate-cardcreditionals, CRV-cardcreditionals, Amount) VALUES (%s, %s, %s, %s, %s, %s)", (FullName-cardcreditionals, CardNum-cardcreditionals, ExpDate-cardcreditionals, CRV-cardcreditionals, Amount))
            #mysql.connection.commit()
            #cur.close()
            #return 'success'

        return flask.render_template("index.html", token= "Hey")

@app.route("/test")
def test():
    return "Heyyyyyy"

        
app.run(debug=True)

