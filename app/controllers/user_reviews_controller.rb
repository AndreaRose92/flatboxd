class UserReviewsController < ApplicationController

    def show
        render json: Review.where(user_id: params[:id])
    end

end
