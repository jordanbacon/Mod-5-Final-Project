class CreateBookeditems < ActiveRecord::Migration[5.2]
  def change
    create_table :bookeditems do |t|
      t.string :date
      t.integer :number_of_passengers
      t.integer :order_id
    end
  end
end
