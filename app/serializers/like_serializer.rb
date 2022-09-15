class LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :review_id
  # has_one :user
  # has_one :review
end
