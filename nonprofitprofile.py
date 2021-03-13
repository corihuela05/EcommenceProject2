def getnonprofitprofile(db):
    
    class nonprofitProfileTable:
        def __init__(self,db):
            self.db=db
            class nonprofitprofile(self.db.Model):
                Id_Number_nonprofit = db.Column(db.Integer(4), primary_key=True)
                Name_nonprofit = db.Column(db.String(20), unique=False)
                Description_nonprofit = db.Column(db.String(20), unique=False)
                User_nonprofit = db.Column(db.String(20), unique=False)
                Pass_nonprofit = db.Column(db.String(20), unique=False)
                Goals_nonprofit= db.Column(db.String(20), unique =False) 
                Phone_nonprofit= db.Column(db.String(20), unique=True) 
                Address_nonprofit=db.column(db.string 50), unique=True)
                Homephone_nonprofit=db.column(db.string 50), unique =True)
                SecondaryPhone_nonprofit=db.column(db.string(16), unique =True)
                Email_nonprofit=db.column(db.string 50), unique =True)
                Revenue_nonprofit=db.column(db.Integer(8), unique =True)
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