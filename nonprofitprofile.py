def getnonprofitprofile(db):
    
    class nonprofitProfileTable:
        def __init__(self,db):
            self.db=db
            class nonprofitprofile(self.db.Model):
                Id_Number_nonprofit = db.Column(db.Integer, primary_key=True)
                Name_nonprofit = db.Column(db.String(20), unique=False)
                Description_nonprofit = db.Column(db.String(20), unique=False)
                User_nonprofit = db.Column(db.String(20), unique=False)
                Pass_nonprofit = db.Column(db.String(20), unique=False)
                Goals_nonprofit= db.Column(db.String(20), unique =False) 
                Phone_nonprofit= db.Column(db.String(20), unique=False) 
                Address_nonprofit=db.Column(db.String (50), unique=False)
                Homephone_nonprofit=db.Column(db.String (50), unique=False)
                SecondaryPhone_nonprofit=db.Column(db.String(16), unique=False)
                Email_nonprofit=db.Column(db.String (50), unique=False)
                Revenue_nonprofit=db.Column(db.Integer, unique=False)
                def __repr__(self):                         
                    return '<User %r>' % self.Number_nonprofitprofile
            self.nonprofitprofile=nonprofitprofile
        def insert(self,id):
            entry=self.nonprofitprofile(Number_nonprofitprofile=id)
            self.db.session.add(entry)
            self.db.session.commit()
        def delete(self,id):
            entry=self.nonprofitprofile.query.filter_by(Number_nonprofitprofile=id).delete()
            self.db.session.commit()
        def edit(self,id,to):
            entry=self.nonprofitprofile.query.filter_by(Number_nonprofitprofile=id).first()
            entry.Number_nonprofitprofile=to
            self.db.session.commit()

    return nonprofitProfileTable(db)