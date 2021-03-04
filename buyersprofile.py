
def getbuyersprofile(db):
    class buyersprofile(db.Model):
        Number_BuyerProfile = db.Column(db.Integer, primary_key=True)
        Name_buyerprofile = db.Column(db.Text, unique=False)
        Address_buyerprofile = db.Column(db.String(25), unique=True)
        FirstPhone_buyerprofile = db.Column(db.Integer, unique=False)
        SecondaryPhone_buyerprofile = db.Column(db.String(14), unique=False)
        ProfileCreated_buyerprofile = db.Column(db.DateTime, unique=False)
        MoneyContributed = db.Column(db.Integer, unique=False)

        def __repr__(self):                         
            return '<User %r>' % self.username
    return buyersprofile