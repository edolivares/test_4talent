# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ciudad.create(:name => 'Santiago', :country_code => 'cl')
Ciudad.create(:name => 'Lima', :country_code => 'pe')
Ciudad.create(:name => 'Sao Paulo', :country_code => 'br')
Ciudad.create(:name => 'Buenos Aires', :country_code => 'ar')


# history=Historial.create([{ temperatura: '25', desc: 'nublado', icon: '03n', ciudad_id: '1' }, 
#                           { temperatura: '27', desc: 'soleado', icon: '04n', ciudad_id: '1' },
#                           { temperatura: '24', desc: 'nublado', icon: '03n', ciudad_id: '1' },
#                           { temperatura: '25', desc: 'nublado', icon: '03n', ciudad_id: '2' }, 
#                           { temperatura: '27', desc: 'soleado', icon: '04n', ciudad_id: '2' },
#                           { temperatura: '24', desc: 'nublado', icon: '03n', ciudad_id: '2' },
#                           { temperatura: '25', desc: 'nublado', icon: '03n', ciudad_id: '3' }, 
#                           { temperatura: '27', desc: 'soleado', icon: '04n', ciudad_id: '3' },
#                           { temperatura: '24', desc: 'nublado', icon: '03n', ciudad_id: '3' },
#                           { temperatura: '25', desc: 'nublado', icon: '03n', ciudad_id: '4' }, 
#                           { temperatura: '27', desc: 'soleado', icon: '04n', ciudad_id: '4' },
#                           { temperatura: '24', desc: 'nublado', icon: '03n', ciudad_id: '4' },
#                         ])