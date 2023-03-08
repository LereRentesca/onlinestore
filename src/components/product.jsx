import QuantityPicker from './quantityPicker';
import './styles/product.css';

function Product(){
    return(
        <div className='product'>
            <h5>Product Name</h5>
            <img src='https://picsum.photos/200/150' alt=''/>
            <div className='prices'>
                <label>Total</label>
                <label>Price</label>
            </div>
            <QuantityPicker></QuantityPicker>
        </div>
    );
}

export default Product;