import './styles/carousel.css';

function Carousel(){
    return(
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://w.forfun.com/fetch/2e/2e0e582530e34a1a196bdcb75140be15.jpeg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Fruits and Vegetables</h5>
                        <p>We have the freshest fruits in the market!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://img5.goodfon.com/wallpaper/nbig/6/7e/table-condiments-raw-meat.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block whole">
                        <h5>Meat</h5>
                        <p>Meat, meat and more meat!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://img5.goodfon.com/wallpaper/nbig/d/c9/assorti-moreprodukty-ustritsy-laim-krevetki-ryba.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block whole">
                        <h5>Seafood</h5>
                        <p>All the elements of the season!</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
export default Carousel;