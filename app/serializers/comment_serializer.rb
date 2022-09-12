class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_body
  has_one :review
  has_one :user
end
