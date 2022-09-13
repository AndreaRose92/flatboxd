class ReviewWithLikesAndCommentsSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :completed, :comments, :likes
  # has_many :likes
  # has_many :comments

  def comments
    self.object.comments
  end

  def likes
    self.object.likes
  end

end
