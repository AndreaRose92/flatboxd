class GameReviewsController < ApplicationController

    skip_before_action :authorize

    def show
        render json: Review.where(game_id: params[:id])
    end

end
