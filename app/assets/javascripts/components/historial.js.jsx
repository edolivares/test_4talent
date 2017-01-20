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