var WeatherContainer = React.createClass({
   getInitialState: function() {
      return { ciudades: [] };
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
   render: function() {
      return (
         <div>
            <Temperaturas ciudades={this.state.ciudades} update_Path={this.props.updatePath} />
         </div>
      );
   }
});

var Temperaturas = React.createClass({
   getInitialState: function() {
    return {ciudades: [] };
    console.log(this.props.update_Path)
   },
   render: function() {
      const up_path=this.props.update_Path;
      return (
         <ul>
            {this.props.ciudades.map( function(ciudad){ return <Ciudad name={ciudad.name} temperatura={ciudad.informacion.temperatura} country_code={ciudad.cd} key={ciudad.id} city_id={ciudad.id} updatePath={up_path} />})}    
         </ul>
      );
   }
});


var Ciudad = React.createClass({
   propTypes: {
    temperatura: React.PropTypes.string
   },
   getInitialState: function() {
    return { temperatura: "" };
   },
   componentDidMount: function() {
      if (this.props.temperatura=='null') {
         $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q="+this.props.name+","+this.props.country_code+"&units=metric&lang=es&APPID=79487f1d57769def60a20d9d16a967d9",
            type: 'GET',
            dataType: 'json',
            success: function(data) {
               console.log(data);
               this.setState({ temperatura: data.main.temp});

                  $.ajax({
                     url: this.props.updatePath,
                     type: 'POST',
                     dataType: 'json',
                     data: { historial: {temperatura: this.state.temperatura, ciudad_id: this.props.city_id}, _method:'create' },
                     success: function(response) {
                        console.log(response);
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
      }else{
         this.setState({ temperatura: this.props.temperatura});
      }
   },
   render: function() {
      return (
         <div>
            <h4>{ this.props.name } :</h4>
            <p>{ this.state.temperatura }</p>
          </div>
      )
   }
});