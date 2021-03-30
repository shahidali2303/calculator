import React, { Component } from 'react';
import './App.css';
import Heading from "../src/components/heading";
import Submit from "../src/components/submit";
import Cards from "../src/components/card";
import Input from "../src/components/input";


class App extends Component {
  state = { 
      firstInput : "",
      operator : "",
      secondInput : "",
      total :"Result 🎁"
   }

  style = {
      operand:{
        width:400,
        height:200        
      },
      operation:{
        position:'relative',
        width:300,
        height:100,
        top:'50%',
        // left:'50%',
        // translateY:'-50%',
        transform: "translate(0%, -50%)",
        margin:'auto',

      },
      result:{
        width:300,
        height:100,
        margin:'auto',
        marginTop:50
      }
      }

      handleInputfirst = (e) => {
            let input = e.target.value;
            this.setState({firstInput:input})
      }

      handleInputsecond = (e) => {
            let input = e.target.value;
            this.setState({secondInput:input})
      }

           handleOperator = (e) => {
            let input = e.target.value;
            this.setState({operator:input})
      }
      calculate = () => {
        let total = 0;
        let firstNumber = this.state.firstInput ;
        let secondNumber = this.state.secondInput ; 
        let operation = this.state.operator ; 

        if(operation === '+'){
        total =  parseInt(firstNumber) + parseInt(secondNumber);
        }
        else if(operation === '-'){
         total =  parseInt(firstNumber) - parseInt(secondNumber);
        }
        else if(operation === '/'){
         total =  parseInt(firstNumber) / parseInt(secondNumber);
        }
        else{
         total =  parseInt(firstNumber) * parseInt(secondNumber);

        }
        this.setState({total});   


      }


  render() { 
    return ( <>
              <Heading />
              <div className="row m-2">
                  <div className="col-4">    
                    <Cards name={this.state.firstInput} style={this.style.operand}  />
                  </div> 
                  <div className="col-4">    
                    <Cards name={this.state.operator} style={this.style.operation} />
                  </div> 
                  <div className="col-4">    
                    <Cards name={this.state.secondInput} style={this.style.operand} />
                  </div> 
              </div>
              <div className="row m-2">
                  <div className="col-4"> 
                    <Input type="number" onChange={this.handleInputfirst} placeholder=" Enter First number" />
                  </div> 
                  <div className="col-4">    
                    <Input type="text" onChange={this.handleOperator} placeholder="Choose operation : + , - , * , / "/>
                  </div> 
                  <div className="col-4">    
                    <Input type="number" onChange={this.handleInputsecond} placeholder=" Enter Second number" />
                  </div> 
              </div>
              <Submit manage={this.calculate}/>

              <Cards style={this.style.result} name={this.state.total}   />
    
    
    </> 
    );
  } 
}
 
export default App;
