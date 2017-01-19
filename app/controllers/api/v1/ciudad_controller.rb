class Api::V1::CiudadController < ApplicationController
   def all_last_weather
      @ciudades=Ciudad.all
   end
end