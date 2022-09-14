class GameReviewsController < ApplicationController

    def show
        render json: Review.where(game_id: params[:id])
    end

end
