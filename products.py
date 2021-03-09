def getproducts(db):
    
    class productsTable:
        def __init__(self,db):
            self.db=db
            class products(self.db.Model):
                Number_Products = db.Column(db.Integer, primary_key=True)
                productName = db.Column(db.Text, unique=False)
                productPrice = db.Column(db.Integer, unique=False)
                productDescription = db.Column(db.Text, unique=False)
                productImage = db.Column(db.LargeBinary, unique=False)
                def __repr__(self):                         
                    return '<User %r>' % self.Number_Products
            self.products=products
        def insert(self,id):
            entry=self.products(Number_Products=id)
            self.db.session.add(entry)
            self.db.session.commit()
        def delete(self,id):
            entry=self.products.query.filter_by(Number_Products=id).delete()
            self.db.session.commit()
        def edit(self,id,to):
            entry=self.products.query.filter_by(Number_Products=id).first()
            entry.Number_Products=to
            self.db.session.commit()

    return productsTable(db)