class Api::V1::HistorialController < ApplicationController
   def create
      @historial = Historial.new(historial_params)

      if @historial.save
         render :status => 200,
           :json => { :success => true,
                     status: :created,
                     :info => "created",
                     :data => { :mod_date => @historial.created_at } }
      else
         render :status => :unprocessable_entity,
                :json => { :success => false,
                           :info => resource.errors,
                           :data => {} }
      end




      # respond_to do |format|
      #    if @categorium.save
      #       Activity.create(actor: current_user, action: "agregó una nueva categoría", notifiable: @categorium, tipo_noti: 1, url_activity: category_path(@categorium), model_action: "categoria")

      #       format.html { redirect_to categories_path, notice: 'La categoría se creó exitósamente.' }
      #       format.json { render :show, status: :created, location: @categorium }
      #    else
      #       format.html { render :new }
      #       format.json { render json: @categorium.errors, status: :unprocessable_entity }
      #    end
      # end
   end

   private
      def historial_params
         params.require(:historial).permit(:temperatura, :ciudad_id)
      end
end