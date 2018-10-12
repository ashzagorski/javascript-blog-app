Rails.application.routes.draw do
  namespace :api do
    get 'posts' => 'posts#index'
    post 'post' => 'post#create'
  end
end
