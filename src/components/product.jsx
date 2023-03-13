import QuantityPicker from './quantityPicker';
import './styles/product.css';
import { useEffect, useState } from 'react';

function Product(attributes){

    const [quantity,setQuantity] = useState([1]);

    useEffect(function(){
        console.log("im a product");
    },[]);

    function onQuantityChange(qty){
        setQuantity(qty);
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
                <button className='btn btn-primary'>Add</button>
            </div>
        </div>
    );
}

export default Product;