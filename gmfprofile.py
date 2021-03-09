def getgmfprofile(db):
    
    class gmfProfileTable:
        def __init__(self,db):
            self.db=db
            class gmfprofile(self.db.Model):
                Number_gmfprofile = db.Column(db.Integer(4), primary_key=True)
                username_gmfprofile = db.Column(db.String(20), unique=False)
                fname_gmfprofile = db.Column(db.String(20), unique=False)
                lname_gmfprofile = db.Column(db.String(20), unique=False)
                Password1_gmfprofile = db.Column(db.String(20), unique=False)
                Address_gmfprofile = db.Column(db.Text, unique=False)
                WorkPhone_gmfprofile = db.Column(db.Text, unique=False)
                SecondaryNumber_gmfprofile = db.Column(db.Text, unique=False)
                Revenue_gmfprofile = db.Column(db.Integer, unique=False)

                def __repr__(self):                         
                    return '<User %r>' % self.Number_gmfProfile
            self.gmfprofile=gmfprofile
        def insert(self,id):
            entry=self.gmfprofile(Number_gmfProfile=id)
            self.db.session.add(entry)
            self.db.session.commit()
        def delete(self,id):
            entry=self.gmfprofile.query.filter_by(Number_gmfProfile=id).delete()
            self.db.session.commit()
        def edit(self,id,to):
            entry=self.gmfprofile.query.filter_by(Number_gmfProfile=id).first()
            entry.Number_gmfProfile=to
            self.db.session.commit()

    return gmfProfileTable(db)