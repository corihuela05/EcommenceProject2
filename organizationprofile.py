db = SQLAlchemy(app)

def getorganizationprofile(db):
    
    class organizationProfileTable:
        def __init__(self,db):
            self.db=db
            class organizationprofile(self.db.Model):
                Number_organizationprofile = db.Column(db.String(4), primary_key=True)
                Name_organizationprofile = db.Column(db.Text, unique=False)
                PhoneNumber_organizationprofile = db.Column(db.String(10), unique=False)
                Address_organizationprofile = db.Column(db.String(25), unique=False)
                HomePhone_organizationprofile = db.Column(db.String(10), unique=False)
		SecondaryPhone_organizationprofile = db.Column(db.String(10), unique=False)
		Email_organizationprofile = db.Column(db.String(20), unique=False)
                MTDRevenue_Users = db.Column(db.Integer, unique=False)
                CategoryOfService_organizationprofile = db.Column(db.Text, unique=False)
		Description_organizationprofile = db.Column(db.Integer, unique=False)

                def __repr__(self):                         
                    return '<User %r>' % self.Number_organizationprofile
            self.organizationprofile=organizationprofile
        def insert(self,id):
            entry=self.organizationprofile(Number_organizationprofile=id)
            self.db.session.add(entry)
            self.db.session.commit()
        def delete(self,id):
            entry=self.organizationprofile.query.filter_by(Number_organizationprofile=id).delete()
            self.db.session.commit()
        def edit(self,id,to):
            entry=self.organizationprofile.query.filter_by(Number_organizationprofile=id).first()
            entry.Number_organizationprofile=to
            self.db.session.commit()

    return organizationProfileTable(db)
