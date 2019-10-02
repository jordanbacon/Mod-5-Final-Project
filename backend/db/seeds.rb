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
Bookeditem.destroy_all

u1 = User.create(name: "User1", email: "user1@gmail.com", password: "password")
u2 = User.create(name: "User2", email: "user2@gmail.com", password: "password")
u3 = User.create(name: "Admin", email: "admin@gmail.com", password: "password")

o1 = Order.create(user_id: u1.id)
o2 = Order.create(user_id: u2.id)
o3 = Order.create(user_id: u3.id)

i1 = Item.create(date:"April 19, 2019", number_of_passengers: 1)
i2 = Item.create(date:"May 12, 2019", number_of_passengers: 1)
i3 = Item.create(date:"June 5, 2019", number_of_passengers: 1)
i4 = Item.create(date:"July 20, 2019", number_of_passengers: 1)
i5 = Item.create(date:"July 25, 2019", number_of_passengers: 1)
i6 = Item.create(date:"August 3, 2019", number_of_passengers: 1)

pi1 = Bookeditem.create(date: "July 20, 2019", number_of_passengers: 1, order_id: o1.id)
pi2 = Bookeditem.create(date: "June 5, 2019", number_of_passengers: 1, order_id: o2.id)
pi3 = Bookeditem.create(date: "April 19, 2019", number_of_passengers: 1, order_id: o3.id)
pi4 = Bookeditem.create(date: "August 3, 2019", number_of_passengers: 1, order_id: o1.id)
pi5 = Bookeditem.create(date: "May 12, 2019", number_of_passengers: 1, order_id: o2.id)
pi6 = Bookeditem.create(date: "July 25, 2019", number_of_passengers: 1, order_id: o3.id)