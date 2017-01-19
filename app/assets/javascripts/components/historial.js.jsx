var Historial = React.createClass({
   getInitialState: function() {
      return { registros: [] };
   },
   componentWillMount: function() {
      this.fetchRegistros();
   },
   fetchRegistros: function() {
      $.ajax({
         url: this.props.registrosPath,
         dataType: 'json',
         success: function(data) {
            console.log(data.ciudades);
            this.setState({registros: data.ciudades});
         }.bind(this),
         error: function(data) {
            this.setState({registros: []});
         }.bind(this)
      });
   },
   render: function() {
      return (
         <div className="row"> 
            <TablaHistorial registros={this.state.registros} />
         </div>
      );
   }
});

var TablaHistorial = React.createClass({
   getInitialState: function() {
    return {registros: [] };
   },
   render: function() {
      return (
         <div className="row"> 
            {this.props.registros.map( function(ciudad){ 
               return ( 
                  <div key={ciudad.id} className="col-lg-6">
                     <div className="portlet">
                        <div className="portlet-heading">
                           <h3 className="portlet-title text-dark text-uppercase">{ciudad.name}</h3>
                        </div>
                        <div>
                           <div className="portlet-body">
                              <div className="table-responsive">
                                 <table className="table">
                                    <thead>
                                       <tr>
                                          <th>Ícono</th>
                                          <th>Temperatura</th>
                                          <th>Desc.</th>
                                          <th>Fecha</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       {ciudad.historial.map( function(elemento){  
                                          return ( 
                                             <tr key={elemento.id}>
                                                <Imagen dato={elemento.icon} />
                                                <Fila dato={elemento.temperatura} />
                                                <Fila dato={elemento.desc} />
                                                <Fila dato={elemento.date} />
                                             </tr>
                                           );
                                       })}
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>  
                  </div>);
               })}    
         </div>
      );
   }
});


var Fila = React.createClass({
   render: function() {
      return (
         <td>{this.props.dato}</td>  
      )
   }
});

var Imagen = React.createClass({
   render: function() {
      const ruta_img="http://openweathermap.org/img/w/"+ this.props.dato +".png"
      return (
         <td><img src={ruta_img}></img></td>  
      )
   }
});
