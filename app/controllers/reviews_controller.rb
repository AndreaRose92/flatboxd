class ReviewsController < ApplicationController

    # before_action :authorize
    # skip_before_action :authorize, only: [:index, :show, :create]

    def index
        reviews = Review.all
        render json: reviews, status: :ok
    end

    def show
        review = find_review
        render json: review, status: :ok
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = find_review
        if review.user_id == session[:user_id]
            review.update!(review_params)
            render json: review, status: :accepted
        else
            return render json: {error: "Not authorized" }, status: :unauthorized
        end
    end

    def destroy
        review = find_review
        review.destroy
        head :no_content
    end

    private

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:content, :rating, :completed, :user_id, :game_id)
    end

    # def authorize
    #     return render json: {error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    # end

end
