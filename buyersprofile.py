def getbuyerprofile(db):
    class buyerProfileTable:
        def __init__(self,db):
            self.db=db
            class buyerprofile(self.db.Model):
                Number_BuyerProfile = db.Column(db.String(4), primary_key=True)
                Name_buyerprofile = db.Column(db.Text, unique=False)
                Address_buyerprofile = db.Column(db.String(25), unique=False)
                FirstPhone_buyerprofile = db.Column(db.String(10), unique=False)
		        SecondaryPhone_buyerprofile = db.Column(db.String(10), unique=False)
		        ProfileCreated_buyerprofile = db.Column(db.Date, unique=False)
                MoneyContributed = db.Column(db.Integer, unique=False)


                def __repr__(self):                         
                    return '<User %r>' % self.Number_buyerprofile
            self.buyerprofile=buyerprofile
        def insert(self,id):
            entry=self.buyerprofile(Number_BuyerProfile=id)
            self.db.session.add(entry)
            self.db.session.commit()
        def delete(self,id):
            entry=self.buyerprofile.query.filter_by(Number_BuyerProfile=id).delete()
            self.db.session.commit()
        def edit(self,id,to):
            entry=self.buyerprofile.query.filter_by(Number_BuyerProfile=id).first()
            entry.Number_BuyerProfile=to
            self.db.session.commit()

    return buyerProfileTable(db)

