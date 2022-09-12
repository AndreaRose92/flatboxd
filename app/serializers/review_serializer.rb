class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :completed
  has_one :user
  has_one :game
end
