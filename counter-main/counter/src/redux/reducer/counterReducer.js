import * as actionTypes from "../actions/actionTypes";
import * as initialState from "./initialState";

const counterReducer = (state = initialState.counterState, action) => {
  switch (action.type) {
    case actionTypes.START:
      return {...state,value:action?.value ,deger:action?.value};
    case actionTypes.STOP:
      return {...state,value:action?.value};
    default:
      return state
  }
};

export default counterReducer;
