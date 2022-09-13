class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :platform, :image_url
  has_many :reviews, serializer: ReviewWithLikesAndCommentsSerializer
end
