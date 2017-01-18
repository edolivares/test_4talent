class CreateCiudads < ActiveRecord::Migration[5.0]
  def change
    create_table :ciudads do |t|
      t.string :name
      t.string :country_code

      t.timestamps
    end
  end
end
