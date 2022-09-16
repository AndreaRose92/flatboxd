class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :platform, :image_url, :average_rating
  has_many :reviews, serializer: ReviewWithLikesAndCommentsSerializer

  def average_rating
    self.object.reviews.average(:rating).to_f.ceil(3)
  end

end
