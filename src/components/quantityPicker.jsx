import './styles/quantityPicker.css';
import { useState } from 'react';

function QuantityPicker(props){

    let [i,setI] = useState(1);
     
    function decrease(){
        if(i>0){
            setI(--i);
            props.onChange(i);
        }
    }

    function increase(){
        if(i>=0){
            setI(++i);
            props.onChange(i);
        }
    }

    return (
        <div className="qt-picker">
            <button type="button" disabled={i===0} onClick={decrease} className="btn btn-success">-</button>
            <label>{i}</label>
            <button type="button" onClick={increase} className="btn btn-success">+</button>
        </div>
    );
}

export default QuantityPicker;