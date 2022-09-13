class Review < ApplicationRecord
  belongs_to :user
  belongs_to :game
  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy

  validates :content, length: { minimum: 20 }
  validates :rating, :completed, :user_id, :game_id, presence: true
end
