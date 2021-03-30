import React, { Component } from 'react';

class Cards extends Component {
    state = {  }

   


    render() { 
        return ( 
        
            <div className="card" style={this.props.style} >
                <div className="card-body text-center m-auto">
                    <h2 className="card-body">{this.props.name}</h2>     
                </div>
            </div>
         );
    }
}
 
export default Cards;