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
   render: function() {
      const ciudadInfo= [];
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
                                    
                                       <Refactorizador ciudad_info={ciudad} />
                                    
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

var Refactorizador = React.createClass({
   getInitialState: function() {
      return { ciudad: [], tieneHistorial: false };
   },
   componentDidMount: function() {
      this.setState({ciudad: this.props.ciudad_info });
      if (this.props.ciudad_info.hasOwnProperty('historial')){
         this.setState({tieneHistorial: true });
      }else{
         this.setState({tieneHistorial: false });
      }
   },
   render: function() {
      if (this.state.tieneHistorial==true){
         return (
            <tbody>
               {this.state.ciudad.historial.map( function(elemento){  
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
         );
      }else{
         return ( 
            <tr>
               <td colSpan="4">No hay registros</td>
            </tr>
         );
      }
   }
});