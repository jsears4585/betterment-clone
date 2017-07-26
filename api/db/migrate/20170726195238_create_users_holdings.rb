class CreateUsersHoldings < ActiveRecord::Migration[5.1]
  def change
    create_table :users_holdings do |t|
      t.references :user, foreign_key: true
      t.references :holding, foreign_key: true
      t.float :shares

      t.timestamps
    end
  end
end
