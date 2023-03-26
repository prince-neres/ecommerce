from app.models import Product
from app.products import products

for product in products:
	p = Product(name=product['name'], image=product['image'], brand=product['brand'], category=product['category'], description=product['description'], rating=product['rating'], numReviews=product['numReviews'], price=product['price'], countInStock=product['countInStock'], _id=product['_id'])
	p.save()