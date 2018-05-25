import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import axios from 'axios'
// import { url } from 'inspector';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      ID:0,
      imageURL:'',
      product:'',
      price: 0,
      inventory:[]
  }
}
  componentDidMount(){
    axios.get('/api/inventory').then((res) => 
  this.setState({
    inventory:res.data
  }))
  }
  addProduct(){
    let body = {
      imageURL: this.state.imageURL,
      product: this.state.product,
      price: this.state.price,
    }
      axios.post('/api/addproduct', body).then((res) => {
        this.setState({
          inventory: res.data,
          imageURL: '',
          product: '',
          price:0
        })
      })
  }

  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Dashboard inventory = {this.state.inventory}/>
        <Form/>
        <Header/>
        <div>
          <input onChange = {(e) => this.setState({imageURL:e.target.value})}/>
        </div> 
        <div>
          <input onChange = {(e)=>  this.setState({product:e.target.value})}/>
        </div> 
        <div>
          <input onChange =  {(e)=>  this.setState({price:e.target.value})}/>
        </div> 
        <button onClick = {(e)=> this.setState({imageURL:'',product:'',price:0})}>Cancel</button>
        <button onClick = {() => this.addProduct()}>Add to Inventory</button>
        {/* <div>{this.state.finalImage}</div>  */}
      </div>
    );
  }
}

export default App;
