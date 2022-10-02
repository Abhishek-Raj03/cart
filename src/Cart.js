import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
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
  render() {
    const { products } = this.state;
    // let arr=[2,6,7,4,3,"rohan"]
    // let arr=[<CartItem/>,<CartItem/>,<CartItem/>,<CartItem/>]
    // arr.push(<CartItem/>)
    return (
      <div className="cart">
        {
          products.map((product) => {
          return (
        <CartItem
            product={product}
            key={product.id}
            increaseQuantity={this.handleIncreaseQuantity}
            decreaseQuantity={this.handleDecreaseQuantity}
        />
         );
        })
        }
      </div>
    );
  }
}

export default Cart;
