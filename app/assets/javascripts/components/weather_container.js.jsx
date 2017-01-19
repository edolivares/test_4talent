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
         <div className="row"> 
            {this.props.ciudades.map( function(ciudad){ return <Ciudad name={ciudad.name} temperatura={ciudad.informacion.temperatura} desc={ciudad.informacion.desc} icon={ciudad.informacion.icon} country_code={ciudad.cd} date={ciudad.informacion.date} key={ciudad.id} city_id={ciudad.id} updatePath={up_path} />})}    
         </div>
      );
   }
});


var Ciudad = React.createClass({
   propTypes: {
    temperatura: React.PropTypes.string,
    icon: React.PropTypes.string,
    desc: React.PropTypes.string
   },
   getInitialState: function() {
    return { temperatura: "", icon: "", desc: "", icon_url: "" };
   },
   componentDidMount: function() {
      if (this.props.temperatura=='null') {
         $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q="+this.props.name+","+this.props.country_code+"&units=metric&lang=es&APPID=79487f1d57769def60a20d9d16a967d9",
            type: 'GET',
            dataType: 'json',
            success: function(data) {
               this.setState({ temperatura: data.main.temp});
               this.setState({ icon: data.weather[0].icon});
               this.setState({ desc: data.weather[0].description});
               this.setState({ icon_url: "http://openweathermap.org/img/w/"+ data.weather[0].icon+".png"});
                  $.ajax({
                     url: this.props.updatePath,
                     type: 'POST',
                     dataType: 'json',
                     data: { historial: {temperatura: this.state.temperatura, desc: this.state.desc, icon: this.state.icon, ciudad_id: this.props.city_id}, _method:'create' },
                     success: function(data) {
                        console.log(data);
                        $("#mod-date").text("Última actualización: " + data.mod_date);
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
         this.setState({ icon_url: "http://openweathermap.org/img/w/"+ this.props.icon+".png"});
         this.setState({ desc: this.props.desc});
         $("#mod-date").text("Última actualización: " + this.props.date);
      }

   },
   render: function() {
      return (
         <div className="col-lg-6">
            <div className="panel bg-primary-alt">
               <div className="panel-body">
                  <div className="row">
                     <div className="col-sm-7">
                         <div className="row">
                             <div className="col-xs-6 text-center">
                                 <img src={this.state.icon_url} width="115px" height="115px" className="responsive"></img>
                             </div>
                             <div className="col-xs-6">
                                 <h2 className="m-t-0 text-white"><b>{ this.state.temperatura }ºC</b></h2>
                                 <p className="text-white text-capitalize">{ this.state.desc }</p>
                             </div>
                         </div>
                     </div>
                     <div className="col-sm-5">
                         <div className="row">
                             <div className="col-xs-12 text-center">
                                 <h2 style={{"paddingTop" : "35px"}} className="m-t-0 text-white"><b>{ this.props.name }</b></h2>
                             </div>
                         </div>
                     </div> 
                  </div>
               </div>
            </div>
         </div>          
      )
   }
});