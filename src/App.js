import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './topmenu/Menu';

class Formu extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name : null,
      age : null,
    }
  }


  handleSubmit(event){
    alert(this.state.name + "is at age of " + this.state.age);
    event.preventDefault();
  }

  render () {

    return(
      
    <div>
      
      <form method="post" action=""> 
        
        <input id="name" 
               type="text" 
               placeholder="Your name" 
               value={this.state.name} 
               onChange={(event) => this.setState({name: event.target.value}) }
               />

        <input type="number" 
               placeholder="Your Age" 
               value= {this.props.age} 
               onChange= {(event) => this.setState({age: event.target.value}) } 
               />
        <button onClick={(event) =>{this.handleSubmit(event)} }> Click me </button>
      </form>
      Name : {this.state.name} <br />
      Age : {this.state.age}
    </div>

    );
  }
}

function App() {
  return (
    <div>
      <Menu ></Menu>
      <Formu></Formu>
    </div>
    
  );
}

export default App;
