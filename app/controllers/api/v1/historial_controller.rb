class Api::V1::HistorialController < ApplicationController
   def create
      @historial = Historial.new(historial_params)

      if @historial.save
         render json: {status: :created, 
                      :data => { 
                        :mod_date => @historial.created_at.strftime("%d-%m-%Y %H:%M:%S")}
                     }
         
      else
         render json: {status: :unprocessable_entity, 
                        info: resource.errors,
                        :data => {} }

      end

   end

   def complete_history
      @ciudades=Ciudad.all
   end

   private
      def historial_params
         params.require(:historial).permit(:temperatura, :icon, :desc, :ciudad_id)
      end
end