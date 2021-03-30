import React, { Component } from 'react';

class Heading extends Component {
    state = {  }

    style = {
        color:'black'
    }
    render() { 
        return ( 
            <div>
                <h1 className="display-1 m-auto text-center" style={this.style}><u>Calculator</u></h1>
            </div>
         );
    }
}
 
export default Heading;