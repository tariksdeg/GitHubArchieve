import * as actionTypes from "./actionTypes";

export const counterAction = (value,timer) => async (dispatch) => {
  
  if (value <= 10) {
    timer = setInterval(function () {
      value -= 1;
      dispatch({ type: actionTypes.START, value });

      if (value < 1) {
        
       clearInterval(timer)
        
      
      }
      
    }, 1000);
    
  }
  
};
