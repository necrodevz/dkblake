class CreateSkills < ActiveRecord::Migration[5.1]
  def change
    create_table :skills do |t|
      t.string :name
      t.integer :skilliq
      t.belongs_to :me

      t.timestamps
    end
  end
end
