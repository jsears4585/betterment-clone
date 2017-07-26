class CreateHoldings < ActiveRecord::Migration[5.1]
  def change
    create_table :holdings do |t|
      t.string :ticker
      t.string :fund_name

      t.timestamps
    end
  end
end
