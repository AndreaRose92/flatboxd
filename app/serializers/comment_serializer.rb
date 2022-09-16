class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_body, :user_id
  has_one :review
  has_one :user
end
