var WeatherContainer = React.createClass({
   propTypes: {
    temperatura: React.PropTypes.string,
    icon: React.PropTypes.string,
    desc: React.PropTypes.string
   },
   getInitialState: function() {
      return { ciudades: [], temperatura: "", desc: "", icon_url: "" };
   },
   componentWillMount: function() {
      this.fetchCiudades();
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
   handleClick: function() {
      this.state.ciudades.map( function(ciudad){  
         $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q="+ciudad.name+","+ciudad.cd+"&units=metric&lang=es&APPID=79487f1d57769def60a20d9d16a967d9",
            type: 'GET',
            dataType: 'json',
            success: function(data) {
               this.setState({ temperatura: data.main.temp});
               this.setState({ desc: data.weather[0].description});
               this.setState({ icon_url: "http://openweathermap.org/img/w/"+ data.weather[0].icon+".png"});
                  $.ajax({
                     url: this.props.updatePath,
                     type: 'POST',
                     dataType: 'json',
                     data: { historial: {temperatura: this.state.temperatura, desc: this.state.desc, icon: this.state.icon_url, ciudad_id: ciudad.id}, _method:'create' },
                     success: function(data) {
                        $("#mod-date").text("Última actualización: " + data.data.mod_date);
                        this.fetchCiudades();
                     }.bind(this),
                     error: function(data) {
                        console.log(data);
                     }.bind(this)
                  });

            }.bind(this),
            error: function(data) {
               this.setState({ temperatura: "Error de obtención de información"});
            }.bind(this)
         });
      }.bind(this))  
      
   },
   render: function() {
      return (
         <div>
            <Temperaturas ciudades={this.state.ciudades} update_Path={this.props.updatePath} />
            <div className="row"><p id="mod-date"></p></div>
            <a href="#" className="btn btn-success btn-rounded m-b-5" onClick={ this.handleClick }>Actualizar información</a>
         </div>
      );
   }
});