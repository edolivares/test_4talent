var Temperaturas = React.createClass({
   getInitialState: function() {
    return {ciudades: [] };
   },
   render: function() {
      const up_path=this.props.update_Path;
      return (
         <div className="row"> 
            {this.props.ciudades.map( function(ciudad){ return <Ciudad name={ciudad.name} temperatura={ciudad.informacion.temperatura} desc={ciudad.informacion.desc} icon={ciudad.informacion.icon} country_code={ciudad.cd} date={ciudad.informacion.date} key={ciudad.id} city_id={ciudad.id} updatePath={up_path} />})}    
         </div>
      );
   }
});