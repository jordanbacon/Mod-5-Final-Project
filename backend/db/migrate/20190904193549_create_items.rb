class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :date
      t.integer :number_of_passengers
      # t.timestamps
    end
  end
end
