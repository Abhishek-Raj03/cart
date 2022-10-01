import React from 'react';

class CartItem extends React.Component {
    render () {
    return (
        <div className="cart-item" style={{background:'red'}}>
        <div className="left-block">
        <img style={styles.image}/>
        
        </div>

        <div className='right-block'>

           <div style={{fontSize:25}}>phone</div>
           <div style={{color:'#777'}}>Rs 999</div>
           <div style={{color:'#777'}}>Quantity</div>
           <div className='cart-item-actions'>
           {/* Buttons */}
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