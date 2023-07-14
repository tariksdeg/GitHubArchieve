import * as actionTypes from "../actions/actionTypes";
import * as initialState from "./initialState";

const coffeeReducer = (state = initialState.coffeeState, action) => {
  
  switch (action.type) {
    case actionTypes.GET_COFFEES:
      return { ...state, coffeesTable: action?.coffeesDB };
    case actionTypes.CHANGE_CATEGORY:
    return{...state,category: action?.category, coffeesTable:action?.filteredTable}  ;
    case actionTypes.FILTER:
    return{...state, coffeesTable:action?.filteredCoffees}  ;
    default:
      return state
  }
  
};

export default coffeeReducer
