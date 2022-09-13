class User < ApplicationRecord
    has_many :games, through: :reviews
    has_many :reviews, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :likes, dependent: :destroy

    has_secure_password
end
