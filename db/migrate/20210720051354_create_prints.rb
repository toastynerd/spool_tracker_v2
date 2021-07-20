class CreatePrints < ActiveRecord::Migration[6.1]
  def change
    create_table :prints do |t|
      t.string :rfid
      t.string :print_file
      t.text :notes
      t.jsonb :settings

      t.timestamps
    end
  end
end
