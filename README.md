# README

> **Note:**

> - Está hecho con rails 5, react y mysql.
> - Traté de dejar el proyecto lo más dinámico posible, para que no exista acoplamiento entre el código y la base de datos. 
> - Agregué dos tablas, ciudades e historial, por lo que se pueden agregar más ciudades y seguirá manteniendo el diseño, junto a su usabilidad.

Things you may want to cover:

* Versión de rails: 5.0

* Creación de la BD
   Rake db:create
   
* Inicialización de la DB

   El seed contiene las ciudades solicitadas en el ejercicio, así que es necesario ejecutarlo.
   
   RAILS_ENV=development rake db:migrate
   RAILS_ENV=development rake db:seed