import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 999,
          title: "Phone",
          qty: 10,
          img: "",
          id: 2,
        },
        {
          price: 9999,
          title: "Laptop",
          qty: 4,
          img: "",
          id: 3,
        },
      ],
    };
  }
  handleIncreaseQuantity = (product)=> {
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
        products: products
    })
 }
 handleDecreaseQuantity = (product)=> {
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty <= 0){
        return;
    }
    products[index].qty -= 1;
    this.setState({
        products: products
    })
 }
 handleDeleteProduct = (id)=> {
    const {products} = this.state;
    const items = products.filter((item) => {
      return item.id !== id });
      this.setState({
          products: items
      })
 }
  render() {
    const { products } = this.state;
    let count=0;
    products.forEach((product)=> {
      count += product.qty
    })
  return (
    <div className="App">
      {/* <h1>Cart</h1> */}
      <Navbar num={count}/>
      <Cart
        products={products}
        increaseQuantity={this.handleIncreaseQuantity}
        decreaseQuantity={this.handleDecreaseQuantity}
        deleteProduct={this.handleDeleteProduct}
      />
    </div>
  );
  }
}

export default App;