json.ciudades(@ciudades) do | ciudad|
   json.id ciudad.id
   json.name ciudad.name
   json.cd ciudad.country_code
   json.informacion do 
      if ciudad.historials.any?
         json.temperatura ciudad.historials.last.temperatura
         json.date ciudad.historials.last.created_at
      else
         json.temperatura "null"
         json.date "null"
      end
   end
end