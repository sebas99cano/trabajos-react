import './App.css';
import React, {Component} from 'react';

class App extends Component{
  render(){
    return (<div onClick={this.props.onClick} className="App">Numero de clicks: {this.props.clicks}</div>);
  }
}

export default App;