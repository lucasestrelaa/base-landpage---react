import { createStore, combineReducers } from 'redux';
import session from '../session/session';
import products from '../products/products';
// import numerosReducer from './reducers/numeros'
import whitelabel from '../whiteLabel/whiteLabel'
 
const reducers = combineReducers({
    whiteLabel: whitelabel,  
    session: session,
    products: products,
    numeros: function(state, action){
        // console.log('nomes')
        return {
            a: 1,
            b: 2,
        } 
    },
})

function storeConfig(){
    console.log('store.config')
    return createStore(reducers)
}


export default storeConfig