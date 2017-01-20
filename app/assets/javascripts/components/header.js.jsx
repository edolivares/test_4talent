var Header = React.createClass({
   render: function() {
      return (
         <header>
            <section className="hero">
               <div className="container">
                  <div className="row nav-wrapper">
                     <nav className="navbar navbar-custom">
                         <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                   <span className="sr-only">Toggle navigation</span>
                                   <span className="icon-bar"></span>
                                   <span className="icon-bar"></span>
                                   <span className="icon-bar"></span>
                                </button>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href={this.props.homePath}>Home</a></li>
                                    <li><a href={this.props.historialPath}>Historial</a></li>
                                    <li><a href={this.props.ciudad_Path}>Ciudades</a></li>
                                </ul>
                            </div>
                        </div>
                     </nav> 
                  </div> 
               </div> 
            </section> 
         </header>
      )
   }
});