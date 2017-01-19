json.ciudades(@ciudades) do | ciudad|
   json.id ciudad.id
   json.name ciudad.name
   json.cd ciudad.country_code
   json.informacion do 
      if ciudad.historials.any?
         json.temperatura ciudad.historials.last.temperatura
         json.date ciudad.historials.last.created_at.strftime("%d-%m-%Y %H:%M:%S")
         json.icon ciudad.historials.last.icon
         json.desc ciudad.historials.last.desc.capitalize
      else
         json.temperatura "null"
         json.date "null"
         json.icon "null"
         json.desc "null"
      end
   end
end