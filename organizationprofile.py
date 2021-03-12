class OrganizationProfile (db.Model):
    Id_Number_orgPro = db.Column(db.Integer(4), primary_key=True)
    Name_orgpro = db.Column(db.String(20), unique=False)
    Description_orgpro = db.Column(db.String(20), unique=False)
    Username_organpro = db.Column(db.String(20), unique=False)
    Password_orgpro = db.Column(db.String(20), unique=False)
    Goals_OrgPro= db.Column(db.String(20), unique =False) 
    Phone_shipping= db.Column(db.String(20), unique=True) 
    Address_OrgPro=db.column(db.string 50), unique=True)
    Homephone_orgpro=db.column(db.string 50), unique =True)
    SecondaryPhone_orgpro=db.column(db.string(16), unique =True)
    Email_orgpro=db.column(db.string 50), unique =True)
    Revenue_orgpro=db.column(db.Integer(8), unique =True)
    Catofservice_orgpro=db.colunmn(db.varchar(15)), unique= True)
    Product_orgpro=db.colunmn(db.varchar(15)), unique= True)
    ID_number= db.columm(db.column(Integer(4)), unique=True)
    ID_Number_I=db.column(db.column(binary(800) unique=True)
    ID_Number_v=db.column(db.column(binary(800) unique=True)
db.create_all()

              entry(Id_Number= 1,Name_shipping= "Boys and girls club", Description_orgpro= "after schoool club" , username="bG@gmail.com", , Image_orgpro=' boysandgitlsclub.jpg' , video_orgpro='boysabdgirlsclub.mp4' , Address_orgpro="265 Columbus Drive",
               Goals_orgpro="gain more kids in thier program",HomePhone_orgpro="551-697-7898", SecondaryPhone_orgpro="551-888-7858", Email="BG@gmail.com". Revenue_orgpro=30000
               Catofservice_orgpro="Community", Product_orgpro="after school program", Id_Number_orgPro=1)
               entry2(Id_Number= 2,Name_shipping= "graciousgivers", Description_orgpro= "community for people in poverty" , username="garciousgiversG@gmail.com", , Image_orgpro=' graciousgivers.jpg' , video_orgpro='graciousgivers.mp3' , Address_orgpro="265 Columbus Drive",
               -Goals_orgpro="bublicity",HomePhone_orgpro="201=785-9999", SecondaryPhone_orgpro="201-888-8888", Email="gg@gmail.com". Revenue_orgpro=415678
               Catofservice_orgpro="Community", Product_orgpro="community", Id_Number_orgPro=2)
db.session.add(entry)
db.session.add(entry2)
db.session.commit()

def remove_entry(id_number):
    # Example delete of user
        db.session.delete(id_Number(1))
        db.session.commit()
def mofify_entry():
  db.sesson.update(user = User.query.filter_by(Id_Number=2).first())
  db.commit()
@app.route("/")
def my_index():
        return flask.render_template("index.html", token= "Hello")
app.run(debug=True)
