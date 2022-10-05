import {Component } from 'react'
import logo from './logo.svg';
import Productos from './components/Productos'
import './App.css';

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
      {name: 'Guisante', price: 2500, img: '/productos/guisante.jpg'},
      {name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg'},      
    ]
  }
  render() {
    return(
      <div>
        <Productos
          agregarAlcarro={() => console.log('No hace nada')}
          productos={this.state.productos}
        />
      </div>
    )
  }
}

export default App;
