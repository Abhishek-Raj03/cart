import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Phone",
      qty: 1,
      img: "",
    };
    //  this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  //increase cart value
  increaseQuantity = ()=> { // arrow fun used for binding this
    // setState form 1
    // this.setState({
    //     qty:this.state.qty+1
    // })

    // setState form 2 : used when changed state depends on prevous state
    this.setState((prevState) => {
        return {
            qty: this.state.qty + 1
        }
    })  
  }
  // decrease cart value
  decreaseQuantity = ()=> {
    if(this.state.qty == 1 ) {
        return;
    }
    this.setState((prevState) => {
        return {
            qty: this.state.qty - 1
        }
    })
  }
  // delete cart item
  
  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>

        <div className="right-block">
          <div style={{ fontSize: 25 }}> {title} </div>
          <div style={{ color: "#777" }}> Rs. {price} </div>
          <div style={{ color: "#777" }}> {qty} </div>
          <div className="cart-item-actions">
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              alt="minus"
              className="action-icons"
              onClick={this.decreaseQuantity}
            />

            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              alt="plus"
              className="action-icons"
              onClick={this.increaseQuantity}
            />

            <img
              src="https://cdn-icons-png.flaticon.com/512/484/484662.png"
              alt="delete"
              className="action-icons"
            //   onClick={this.delete}
            />
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};
export default CartItem;
