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