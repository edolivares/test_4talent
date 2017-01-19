class Api::V1::HistorialController < ApplicationController
   def create
      @historial = Historial.new(historial_params)

      if @historial.save
          render :status => 200,
            :json => { :success => true,
                      status: :created,
                      :info => "created",
                      :data => { :mod_date => @historial.created_at.strftime("%d-%m-%Y %H:%M:%S") } }
       else
          render :status => :unprocessable_entity,
                 :json => { :success => false,
                            :info => resource.errors,
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