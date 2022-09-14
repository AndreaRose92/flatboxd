class Review < ApplicationRecord
  belongs_to :user
  belongs_to :game
  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy

  validates :content, length: { minimum: 20 }
  validates :user_id, :game_id, presence: true
  validates :rating, inclusion: {in: 0..5}
  validates :completed, inclusion: [true, false]
end
