var Footer = React.createClass({
   render: function() {
      return (
         <footer className="footer">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3 col-md-3"></div>
                  <div className="col-lg-2 col-md-2"></div>
                  <div className="col-lg-4 col-lg-offset-3 col-md-7">
                     <ul className="nav navbar-nav">
                        <li><a href={this.props.homePath}>Home</a></li>
                        <li><a href={this.props.historialPath}>Historial</a></li>
                        <li><a href={this.props.ciudad_Path}>Ciudades</a></li>
                     </ul>
                  </div>
               </div> 
            </div> 
         </footer> 
      )
   }
});