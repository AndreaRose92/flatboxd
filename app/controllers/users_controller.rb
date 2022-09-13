class UsersController < ApplicationController

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
