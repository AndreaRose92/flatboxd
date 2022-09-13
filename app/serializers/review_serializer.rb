class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :completed
  has_one :user
  has_one :game
  has_many :likes
  has_many :comments
end
