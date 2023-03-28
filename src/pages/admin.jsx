import './styles/admin.css';
import {useState} from 'react';

function Admin(){

    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({});

    function handleTextChange(args){
        const value = args.target.value;
        const name = args.target.name;

        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
    }

    function handleCouponTextChange(args){
        const value = args.target.value;
        const name = args.target.name;
            
        let copy = {...coupon};
        copy[name] = value;
        setCoupon(copy);
    }

    function saveProduct(){
        console.log(product);
    }

    function saveCoupon(){
        console.log(coupon);
    }

    return(
        <div className="Admin">
            <h1>Admin Page</h1>
            <main>
                <section id="products">
                    <h5>Products</h5>
                    <form>
                        <div className='mb-3'>
                            <label className='form-label'>Title</label>
                            <input name="title" onChange={handleTextChange} type="text" className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Category</label>
                            <input name="category" onChange={handleTextChange} type="text" className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Image name</label>
                            <input name="image" onChange={handleTextChange} type="text" className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Price</label>
                            <input name="price" onChange={handleTextChange} type="number" className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <button type="button" className='btn btn-primary' onClick={saveProduct}>Save Product</button>
                        </div>
                    </form> 
                </section>
                <section id='coupons'>
                    <h5>Coupon Codes</h5>
                    <form>
                        <div className='mb-3'>
                            <label className='form-label'>Title</label>
                            <input name="title" onChange={handleCouponTextChange} type="text" className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Code</label>
                            <input name="code" onChange={handleCouponTextChange} type="text" className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>% Discount</label>
                            <input name="discount" onChange={handleCouponTextChange} type="number" className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <button type="button" className='btn btn-primary' onClick={saveCoupon}>Save Coupon</button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}
export default Admin;