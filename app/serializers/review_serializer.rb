class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :completed, :created_at, :updated_at
  has_one :user
  has_one :game
  has_many :likes
  has_many :comments
end
