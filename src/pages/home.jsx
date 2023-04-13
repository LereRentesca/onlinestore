import './styles/home.css';
import Carousel from '../components/carousel';

function Home(){
    return (
        <div className='home'>
            <img className='background' src="/images/background.jpg" alt=''/>
            <div className='coupons'>
                <h4>80% of Discount</h4>
                <h5>Ends in: 00 days 00:00:00</h5> 
            </div>
            <Carousel></Carousel>
        </div>
    );
}
export default Home;