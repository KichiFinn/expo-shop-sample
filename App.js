import React from 'react';

import {Provider} from 'react-redux'
import {createStore,combineReducers} from 'redux'

import Navigation from './Navigations/PagesNavigation'
import cartReducer from './Store/Reducers/CartReducer'
import ordersReducer from './Store/Reducers/OrdersReducer' 
import addressBook from './Store/Reducers/AddressReducer'


const rootReducer = combineReducers({
  cart : cartReducer,
  orders : ordersReducer,
  addressBook : addressBook
})

const store = createStore(rootReducer)

const App = ()=>{
  return <Provider store={store}><Navigation /></Provider>
}

export default App