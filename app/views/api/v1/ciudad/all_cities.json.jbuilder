json.ciudades(@ciudades) do | ciudad|
   json.id ciudad.id
   json.name ciudad.name
   json.country_code ciudad.country_code
end