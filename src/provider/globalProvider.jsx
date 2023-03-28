import { Provider } from 'react';
import GlobalContext from './globalContext';
import { useState } from 'react';

function GlobalProvider(props){
    const [cart,setCart] = useState([]);
    const [user,setUser] = useState({name:"Luis",id:1272153});

    function addToCart(attributes){
        let copy = [...cart];
        copy.push(attributes);
        setCart(copy);
        console.log(copy);
    }

    function removeFromCart(){
        console.log("Global Remove");
    }

    return(
        <GlobalContext.Provider value={{
            cart:cart,
            user:user,
            addToCart:addToCart,
            removeFromCart:removeFromCart
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}
export default GlobalProvider;