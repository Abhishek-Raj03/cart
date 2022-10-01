import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super()
        this.state={
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    render () {
        const {price,title,qty} = this.state;
    return (
        <div className="cart-item" >
        <div className="left-block">
        <img style={styles.image}/>
        
        </div>

        <div className='right-block'>

           <div style = {{fontSize:25}}> {title} </div>
           <div style = {{color:'#777'}}> Rs. {price} </div>
           <div style = {{color:'#777'}}> {qty} </div>
           <div className='cart-item-actions'>
<img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="minus" className='action-icons'/>
<img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="plus" className='action-icons'/>
<img src="https://cdn-icons-png.flaticon.com/512/484/484662.png" alt="delete" className='action-icons'/>
           </div>
        </div>
        </div>
    )
    }
}
const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;