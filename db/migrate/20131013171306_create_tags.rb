class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :user_id, null: false
      t.string :name, null: false

      t.timestamps
    end
    add_index :tags, [:user_id, :name], unique: true
    add_index :tags, :user_id
    add_index :tags, :name
  end
end
