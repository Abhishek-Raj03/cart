import React from "react";

const CartItem = (props) => {
  // constructor() {
  //   super();
  //   this.state = {
  //     price: 999,
  //     title: "Phone",
  //     qty: 1,
  //     img: "",
  //   };
  //   //  this.increaseQuantity = this.increaseQuantity.bind(this);
  // }

  //increase cart value
  // increaseQuantity = () => {
  //   // arrow fun used for binding this

  //   // react does 'Batching' for us in SetState function

  //   // setState form 1
  //   // if there is more than 1 setState function of this form in a function then the last one will executes

  //   // this.setState({
  //   //     qty:this.state.qty+1
  //   // })

  //   // setState is asysncronus
  //   // setState form 2 : used when changed state depends on prevous state
  //   // if there is more than one setState function then react will put all setState function in a queue and executes it one by one
  //   this.setState(
  //     (prevState) => {
  //       return {
  //         qty: this.state.qty + 1,
  //       };
  //       // callback function in state function executes after setState executes
  //     },
  //     () => {
  //       console.log(this.state);
  //     }
  //   );
  // };
  // // decrease cart value
  // decreaseQuantity = () => {
  //   if (this.state.qty === 0) {
  //     return;
  //   }
  //   this.setState((prevState) => {
  //     return {
  //       qty: this.state.qty - 1,
  //     };
  //   });
  // };
  
    const { price, title, qty } = props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={props.product.img}/>
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
              onClick={() => {
                props.decreaseQuantity(props.product)
              }}
            />

            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              alt="plus"
              className="action-icons"
              onClick={() => {
                props.increaseQuantity(props.product)
              }}
            />

            <img
              src="https://cdn-icons-png.flaticon.com/512/484/484662.png"
              alt="delete"
              className="action-icons"
                onClick={()=> {
                  props.deleteProduct(props.product.id)
                }}
            />
          </div>
        </div>
      </div>
    );
  
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
