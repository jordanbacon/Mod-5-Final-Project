# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Order.destroy_all
Item.destroy_all
Purchaseditem.destroy_all

u1 = User.create(name: "User1", email: "user1@gmail.com", password: "password")
u2 = User.create(name: "User 2", email: "user2@gmail.com", password: "password")
u3 = User.create(name: "Admin", email: "admin@gmail.com", password: "password")

o1 = Order.create(user_id: u1.id)
o2 = Order.create(user_id: u2.id)
o3 = Order.create(user_id: u3.id)

i1 = Item.create(date:"July 20, 2019", number_of_passengers: 6)
i2 = Item.create(date:"June 5, 2019", number_of_passengers: 5)
i3 = Item.create(date:"April 19, 2019", number_of_passengers: 4)
i1 = Item.create(date:"August 3, 2019", number_of_passengers: 5)
i1 = Item.create(date:"May 12, 2019", number_of_passengers: 4)
i1 = Item.create(date:"July 25, 2019", number_of_passengers: 6)

pi1 = Purchaseditem.create(date: "July 20, 2019", number_of_passengers: 6, order_id: o1.id)
pi2 = Purchaseditem.create(date: "June 5, 2019", number_of_passengers: 5, order_id: o2.id)
pi3 = Purchaseditem.create(date: "April 19, 2019", number_of_passengers: 4, order_id: o3.id)
pi4 = Purchaseditem.create(date: "August 3, 2019", number_of_passengers: 5, order_id: o1.id)
pi5 = Purchaseditem.create(date: "May 12, 2019", number_of_passengers: 4, order_id: o2.id)
pi6 = Purchaseditem.create(date: "July 25, 2019", number_of_passengers: 6, order_id: o3.id)
