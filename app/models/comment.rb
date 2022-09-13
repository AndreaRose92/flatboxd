class Comment < ApplicationRecord
  belongs_to :review
  belongs_to :user

  validates :comment_body, length: { minimum: 20 }
end
