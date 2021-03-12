from flask import Flask, request, render_template
from flask_mysqldb import MySQL

app = Flask("__main__")

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'gmfdatabase'

#Homepage

@app.route("/", methods=['GET', 'POST')
def index():
        if request.method == "POST":
            details = request.form
        return flask.render_template("index.html", token= "Hello")

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
            details = request.form
            
            
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
            details = request.form
            
            
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
            details = request.form
            
            
            #cur mysql.connection.cursor()
            #cur.execute("INSERT INTO shipping(FullName-cardcreditionals, CardNum-cardcreditionals, ExpDate-cardcreditionals, CRV-cardcreditionals, Amount) VALUES (%s, %s, %s, %s, %s, %s)", (FullName-cardcreditionals, CardNum-cardcreditionals, ExpDate-cardcreditionals, CRV-cardcreditionals, Amount))
            #mysql.connection.commit()
            #cur.close()
            #return 'success'

        return flask.render_template("index.html", token= "Hey")

#Profile

@app.route("/profile", methods=['GET', 'POST')
def profile():
        #if request.method == "POST":
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
