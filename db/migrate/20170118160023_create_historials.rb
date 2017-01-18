class CreateHistorials < ActiveRecord::Migration[5.0]
  def change
    create_table :historials do |t|
      t.string :temperatura
      t.references :ciudad

      t.timestamps
    end
  end
end
