class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :completed, :created_at, :updated_at
  has_one :user
  has_one :game
end
