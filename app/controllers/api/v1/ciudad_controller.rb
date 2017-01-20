class Api::V1::CiudadController < ApplicationController
   def all_last_weather
      @ciudades=Ciudad.all
   end

   def all_cities
      @ciudades = Ciudad.all
   end

   def create
      @ciudad = Ciudad.new(historial_params)

      if @ciudad.save
          render :status => 200,
            :json => { :success => true,
                      status: :created,
                      :info => "created",
                      :data => { :mod_date => @ciudad.created_at.strftime("%d-%m-%Y %H:%M:%S") } }
       else
          render :status => :unprocessable_entity,
                 :json => { :success => false,
                            :info => resource.errors,
                            :data => {} }
       end

   end

   private
      def historial_params
         params.require(:ciudad).permit(:name, :country_code)
      end
end