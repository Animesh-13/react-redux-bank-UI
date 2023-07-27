// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
// const initialStateAccount = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
// };

// const initialStateCustomer = {
//   fullName: "",
//   nationID: "",
//   createAt: "",
// };

// function accountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload,
//         balance: state.balance + action.payload.amount,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan.amount,
//       };
//     default:
//       return state;
//   }
// }

// function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationID: action.payload.nationID,
//         createAt: action.payload.createAt,
//       };
//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payload,
//       };
//     default:
//       return state;
//   }
// }

/**
 * old way.............
 */
// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

/**
 * new way.....
 */
const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;

// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "Buy a car" },
// });

// console.log(store.getState());

// store.dispatch({
//   type: "account/payLoan",
// });
// console.log(store.getState());

// /**
//  * action creater function
//  */

// function deposit(amount) {
//   return { type: "account/deposit", payload: amount };
// }

// function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, purpose },
//   };
// }

// function payloan() {
//   return {
//     type: "account/payLoan",
//   };
// }

// store.dispatch(deposit(500));
// store.dispatch(withdraw(100));
// console.log(store.getState());

// store.dispatch(requestLoan(700, "Buy a Car"));

// console.log(store.getState());
// store.dispatch(payloan());
// console.log(store.getState());

// function createCustomer(fullName, nationID) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationID, createAt: new Date().toISOString() },
//   };
// }

// function updateName(fullName) {
//   return { type: "account/updateName", payload: fullName };
// }

// store.dispatch(createCustomer("Animesh kumar Srivastava", "32682638"));
// console.log(store.getState());
