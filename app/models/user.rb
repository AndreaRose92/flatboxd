class User < ApplicationRecord
    has_many :reviews
    has_many :games, through: :reviews
    has_many :comments
    has_many :likes

end
