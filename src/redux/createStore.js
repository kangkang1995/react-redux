import { createStore,combineReducers } from 'redux'
import cartReducer from './cart/reducer'

let allReducers = {
    shoppingCart : cartReducer
}


const rootReducer = combineReducers(allReducers);
//Redux 提供了一个combineReducers方法，用于 Reducer 的拆分。
export default () => {
    // Redux 提供createStore这个函数，用来生成 Store。
    let store = createStore(rootReducer)
    return store
}