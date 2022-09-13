class GamesController < ApplicationController

    def index
        games = Game.all
        render json: games, status: :ok
    end

    def show
        game = find_game
        render json: game, status: :ok
    end

    def create
        game = Game.create!(game_params)
        render json: game, status: :created
    end

    private

    def find_game
        Game.find(params[:id])
    end

    def game_params
        params.permit(:title, :genre, :platform, :image_url)
    end

end
