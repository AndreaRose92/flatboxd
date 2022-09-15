class LikesController < ApplicationController

    def create
        like = Like.create!(like_params)
        render json: like, status: :created
    end

    def destroy
        like = find_like
        like.destroy
        head :no_content
    end

    private

    def find_like
        Like.find(params[:id])
    end

    def like_params
        params.permit(:user_id, :review_id)
    end

end
