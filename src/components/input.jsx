import React, { Component } from 'react';

class Input extends Component {
  
    render() { 
        return ( 
            <div >
                <input type={this.props.type} onChange={this.props.onChange} placeholder={this.props.placeholder}
                className="text-center form-control" />
            </div>
         );
    }
}
 
export default Input;