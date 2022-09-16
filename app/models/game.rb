class Game < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    validates :title, :platform, :genre, :image_url, presence: true
end
