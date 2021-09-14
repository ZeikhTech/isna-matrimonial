import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counter";
import authReducer from "./reducer/authReducer";
export default configureStore({ reducer: { counterReducer,auth:authReducer } });
