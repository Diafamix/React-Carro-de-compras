import {Component } from 'react'
import logo from './logo.svg';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import NavBar from './components/NavBar'
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
        <NavBar/>
        <Title/>
        <Layout>
          <Productos
            agregarAlcarro={() => console.log('No hace nada')}
            productos={this.state.productos}
          />
        </Layout>
        
      </div>
    )
  }
}

export default App;
