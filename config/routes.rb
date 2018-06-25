Rails.application.routes.draw do
  root to: 'questions#index'
  get '/quizes', to: 'quizes#index'

  namespace :api do
    namespace :v1 do
      resources :questions, only: [:index, :create, :destroy, :update]
      resources :quizes, only: [:index, :create, :destroy, :update]
      resources :questions, only: [:index, :create] do
        get :search, on: :collection
      end
    end
  end
end
