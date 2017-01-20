Rails.application.routes.draw do
  root 'home#index'

   namespace :api, defaults: {format: :json} do
      namespace :v1 do
         # get 'ciudad/all_last_weather', :as => 'all_last_weather'
         resources :ciudad, only: :create do
            collection do
               get :all_cities
               get :all_last_weather
            end
         end
         resources :historial, only: :create do
            collection do
               get :complete_history
            end
         end 
      end
   end

   resources :historial, only: :index
   resources :ciudad, only: :index
end
