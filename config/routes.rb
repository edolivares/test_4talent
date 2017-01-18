Rails.application.routes.draw do
  root 'home#index'

   namespace :api, defaults: {format: :json} do
      namespace :v1 do
         get 'ciudad/all_last_weather', :as => 'all_last_weather'
     end
end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
