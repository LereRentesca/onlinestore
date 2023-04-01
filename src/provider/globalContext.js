import {createContext} from 'react';
/**
 * Should describe the data to be held in the context storage
 * its just a description / NO IMPLEMENTATION HERE
 * Data is inmutable
 */
const globalContext = createContext({
    cart:[],
    user:{},

    getNumOfProducts: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
});

export default globalContext;