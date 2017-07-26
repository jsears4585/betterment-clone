class User < ApplicationRecord
  has_secure_password

  has_many :users_holdings
  has_many :holdings, through: :users_holdings
end
