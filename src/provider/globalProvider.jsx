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

    function getNumOfProducts(){
        let total = 0;
        for (const item of cart) {
            total += item.quantity;
        }
        return total;
    }


    return(
        <GlobalContext.Provider value={{
            cart:cart,
            user:user,
            addToCart:addToCart,
            removeFromCart:removeFromCart,
            getNumOfProducts:getNumOfProducts
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}
export default GlobalProvider;