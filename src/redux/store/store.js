// import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "../counterSlice";

// export default configureStore({
//   reducer: {
//     counter: counterSlice,
//   },
// });
import { createStore } from "redux";
import counterReducer from "../reducer/counterReducer";
const store = createStore(counterReducer);

export default store;
