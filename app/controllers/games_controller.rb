class GamesController < ApplicationController

    skip_before_action :authorize, only: [:index, :show]

    def index
        games = Game.all
        render json: games, status: :ok
    end

    def show
        game = find_game
        render json: game, status: :ok
    end

    def create
        if User.find(params[:user_id]).admin == true
            game = Game.create!(game_params)
            render json: game, status: :created
        else
            return render json: {error: ["Not authorized"]}, status: :unauthorized
        end
    end

    def test
        byebug
    end

    private

    def find_game
        Game.find(params[:id])
    end

    def game_params
        params.permit(:title, :genre, :platform, :image_url)
    end

end
