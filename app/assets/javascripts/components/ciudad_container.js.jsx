var CiudadContainer = React.createClass({
   getInitialState: function() {
      return { ciudades: [] };
   },
   componentWillMount: function() {
      this.fetchCiudades();
      console.log(this.state.ciudades);
   },
   fetchCiudades: function() {
      $.ajax({
         url: this.props.ciudadesPath,
         dataType: 'json',
         success: function(data) {
            this.setState({ciudades: data.ciudades});
         }.bind(this),
         error: function(data) {
            this.setState({ciudades: []});
         }.bind(this)
      });
   },
   render: function() {
      return (
         <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
               <div className="portlet">
                  <div>
                     <div className="portlet-body">
                        <div className="table-responsive">
                           <table className="table">
                              <thead>
                                 <tr>
                                    <th>#</th>
                                    <th>Ciudad</th>
                                    <th>Country Code</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {this.state.ciudades.map( function(elemento){  
                                    return ( 
                                       <tr key={elemento.id}>
                                          <Fila dato={elemento.id} />
                                          <Fila dato={elemento.name} />
                                          <Fila dato={elemento.country_code} />
                                       </tr>
                                    );
                                 })}                       
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-4"></div>
         </div>
      );
   }
});