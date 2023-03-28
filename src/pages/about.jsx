import './styles/about.css';
import { useState } from 'react';

function About(){
    const [displayEmail,setDisplayEmail] = useState(false);

    function toggleEmail(){
        setDisplayEmail(true);
        console.log("Hello");
    }

    function getEmailSection(){
        if(displayEmail){
            return <h5>lere.rentesca@gmail.com</h5>
        }else{
            return null;
        }
    }

    return(
        <div className="about">
            <h5>Luis Renteria</h5>
            {getEmailSection()}
            <button className='btn btn-sm btn-dark' onClick={toggleEmail}>Show my Email</button>
        </div>
    );
}
export default About;