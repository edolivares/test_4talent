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