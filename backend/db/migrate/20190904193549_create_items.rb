class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.integer :quantity
      t.string :type
      t.integer :shop_id

      t.timestamps
    end
  end
end
