class User < ApplicationRecord
    has_many :games, through: :reviews
    has_many :reviews, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :likes, dependent: :destroy

    # validates :username, presence: true, uniqueness: true
    # validates :password_digest, length: { minimum: 6 }

    has_secure_password
end
