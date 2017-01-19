Rails.application.routes.draw do
  root 'home#index'

   namespace :api, defaults: {format: :json} do
      namespace :v1 do
         get 'ciudad/all_last_weather', :as => 'all_last_weather'
         resources :historial, only: :create do
            collection do
               get :complete_history
            end
         end 
      end
   end

   resources :historial, only: :index
end
