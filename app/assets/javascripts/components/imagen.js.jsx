var Imagen = React.createClass({
   render: function() {
      return (
         <td><img src={this.props.dato}></img></td>  
      )
   }
});