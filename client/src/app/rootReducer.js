
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice"
import userReducer from "../slices/userSlice"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}
 
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
})

export default persistReducer(persistConfig, rootReducer);
