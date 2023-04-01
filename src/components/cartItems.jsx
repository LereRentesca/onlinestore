import './styles/cartItem.css';

function CartItem(attributes){
    return(
        console.log(attributes),

        <div className='displayCart'>
            <div className='items'>
                <div className='left'>
                    <h3>{attributes.data.title}</h3>
                    <p>Quantity: {attributes.data.quantity}</p>
                </div>
                <div className='middle'>
                    <img src={"/images/"+attributes.data.image} alt=''/>
                </div>
                <div className='right'>
                    <p>Price: ${attributes.data.price}</p>
                    <p>Sub-total: ${attributes.data.price*attributes.data.quantity}</p>
                </div>
            </div>
        </div>
    );
}
export default CartItem;