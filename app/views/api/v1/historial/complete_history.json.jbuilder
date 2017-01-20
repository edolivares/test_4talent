json.ciudades(@ciudades) do | ciudad|
   json.id ciudad.id
   json.name ciudad.name
   json.cd ciudad.country_code
   json.historial do 
      if ciudad.historials.any?
         json.array! ciudad.historials.order(id: :desc ).each do |historial|
            json.id historial.id
            json.temperatura historial.temperatura
            json.desc historial.desc.capitalize
            json.icon historial.icon
            json.date historial.created_at.strftime("%d-%m-%Y %H:%M:%S")
         end
    
      end
   end
end