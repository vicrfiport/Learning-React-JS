import React, { Component } from 'react';  
class App extends Component{  
   render(){  
     var myStyle = {  
         fontSize: 80,  
         fontFamily: 'Courier',  
         color: '#003300'  
      }  
      return (  
         <div>  
            <h1 style = {myStyle}>Vicri Learning React</h1>  
         </div>  
      );  
   }  
}  
export default App;