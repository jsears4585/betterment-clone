class UsersHolding < ApplicationRecord
  belongs_to :user
  belongs_to :holding
end
