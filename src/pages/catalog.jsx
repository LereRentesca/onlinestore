import Product from '../components/product';
import './styles/catalog.css';

function Catalog(){
    return(
        <div className='catalog'>
            <h1>Hello check our stuff</h1>
            <Product></Product> 
            <Product></Product> 
            <Product></Product> 
            <Product></Product> 
            <Product></Product> 
        </div>
    );
}

export default Catalog;