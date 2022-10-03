import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 6999,
          title: "Watch",
          qty: 4,
          img: "https://images.unsplash.com/photo-1596460107916-430662021049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          id: 1,
        },
        {
          price: 73999,
          title: "Phone",
          qty: 2,
          img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
          id: 2,
        },
        {
          price: 89000,
          title: "Laptop",
          qty: 1,
          img: "https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80",
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
 total = () => {
  const { products } = this.state;
  let total=0;
  products.forEach((product)=> {
    total += (product.price*product.qty)
  })
  return total
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
      <div style={{ padding: 10, fontSize: 20 }}>
        TOTAL: {this.total()}
      </div>
    </div>
  );
  }
}

export default App;