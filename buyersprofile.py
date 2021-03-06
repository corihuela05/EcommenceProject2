
def getbuyersprofile(db):
    
    class buyerProfileTable:
        def __init__(self,db):
            self.db=db
            class buyersprofile(self.db.Model):
                Number_BuyerProfile = db.Column(db.Integer, primary_key=True)
                Name_buyerprofile = db.Column(db.Text, unique=False)
                Address_buyerprofile = db.Column(db.String(25), unique=True)
                FirstPhone_buyerprofile = db.Column(db.Integer, unique=False)
                SecondaryPhone_buyerprofile = db.Column(db.String(14), unique=False)
                ProfileCreated_buyerprofile = db.Column(db.DateTime, unique=False)
                MoneyContributed = db.Column(db.Integer, unique=False)
                def __repr__(self):                         
                    return '<User %r>' % self.Number_BuyerProfile
            self.buyersprofile=buyersprofile
        def insert(self,id):
            entry=self.buyersprofile(Number_BuyerProfile=id)
            self.db.session.add(entry)
            self.db.session.commit()
        def delete(self,id):
            entry=self.buyersprofile.query.filter_by(Number_BuyerProfile=id).delete()
            self.db.session.commit()
        def edit(self,id,to):
            entry=self.buyersprofile.query.filter_by(Number_BuyerProfile=id).first()
            entry.Number_BuyerProfile=to
            self.db.session.commit()

    return buyerProfileTable(db)