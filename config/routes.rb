Rails.application.routes.draw do
  
  resources :reviews
  resources :games, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create]
  resources :comments, only: [:create, :update, :destroy]
  resources :likes, only: [:create, :update, :destroy]
  resources :user_reviews, only: [:show]


  # get '/users/:id', to: 'user_reviews#index'
  get '/test', to: 'games#test'
  post '/signup', to: "users#create"
  get '/me', to: "users#get_logged_in"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
