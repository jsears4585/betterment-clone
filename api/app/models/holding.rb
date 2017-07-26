class Holding < ApplicationRecord
  has_many :users_holdings
  has_many :users, through: :users_holdings
end
