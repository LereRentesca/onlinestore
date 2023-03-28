import QuantityPicker from './quantityPicker';
import './styles/product.css';
import { useEffect, useState, useContext } from 'react';
import GlobalContext from '../provider/globalContext';

function Product(attributes){

    const [quantity,setQuantity] = useState([1]);
    const [prodsForCart,setProdsForCart] = useState({});
    const addToCart = useContext(GlobalContext).addToCart;

    useEffect(function(){
        console.log("im a product");
    },[]);

    function onQuantityChange(qty){
        setQuantity(qty);
    }

    function handleAddClick(){
        let prodsForCart = {...attributes.data};
        prodsForCart.quantity = quantity;
        addToCart(prodsForCart);
    }

    return(
        <div className='product'>
            <h5>{attributes.data.title}</h5>
            <img src={"/images/"+attributes.data.image} alt=''/>
            <div className='prices'>
                <label>Price: ${attributes.data.price}</label>
                <label>Total Price: ${(attributes.data.price*quantity).toFixed(2)}</label>
            </div>
            <div className='picker'>
                <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            </div>
            <div className='add'>   
                <button className='btn btn-primary' onClick={handleAddClick}>Add</button>
            </div>
        </div>
    );
}

export default Product;