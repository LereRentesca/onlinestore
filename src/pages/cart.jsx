import './styles/cart.css';
import { useContext } from 'react';
import globalContext from '../provider/globalContext';
import CartItem from '../components/cartItems';

function Cart(){
    const cart = useContext(globalContext).cart;

    function getTotal(){
        let total=0;
        for (const item of cart) {
            total += item.price*item.quantity;
        }
        return total;
    }

    return(
        <div>
            <div className='title'>
                <h5>These are your products</h5>
            </div>
            {cart.map((prod) => (
                <CartItem key={prod._id} data={prod}></CartItem>
            ))}
            <div className='total'>
                <h5>Total: ${getTotal().toFixed(2)}</h5>
                <button className='btn btn-success'>Pay Now</button>
            </div>
        </div>
    );
}
export default Cart;