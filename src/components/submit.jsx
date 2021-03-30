import React, { Component } from 'react';

class Submit extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="text-center m-auto">
                <button className="btn btn-primary btn-lg" onClick={this.props.manage}>Calculate</button>
            </div>
         );
    }
}
 
export default Submit;