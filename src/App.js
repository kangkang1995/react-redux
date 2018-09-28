import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { cartActions } from './redux/cart/actions'

class App extends Component {
  
  render() {
    console.log(this.props,'5555')
    return ( 
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>{this.props.addToCart('Coffee 500gm', 1, 250)}}>addToCart</button><br />
        <button onClick={()=>{this.props.updateCart('milk 500ml', 5, 110)}}>updateCart</button><br />

        <p>VALUE: {this.props.value.cart.map((listItem,index)=>{
          return <li key={index}>
            {listItem.product} + {listItem.quantity} + {listItem.unitCost}
          </li>
        })}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.shoppingCart)
  return {
    value: state.shoppingCart
  }
}
//connect是由react-redux提供的辅助函数，作用是将store state里的值，映射到this.props
//cartActions是把action里的方法绑定到当前组件，也就是App的this.props
export default connect(mapStateToProps, cartActions)(App);