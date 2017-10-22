class CreateMes < ActiveRecord::Migration[5.1]
  def change
    create_table :mes do |t|
      t.string :name
      t.string :title
      t.text :about_me
      

      t.timestamps
    end
  end
end
