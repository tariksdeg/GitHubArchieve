import * as actionTypes from "./actionTypes";
import { coffeesDB } from "../../db/coffees";

export const getCoffees = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_COFFEES, coffeesDB });
  } catch (error) {
    console.log(error);
  }
};

export const changeCategory = (category) => async (dispatch) => {
  try {
    const filteredTable =
      (await category) === "all"
        ? coffeesDB
        : coffeesDB?.filter((e) => e.category === category);

    dispatch({ type: actionTypes.CHANGE_CATEGORY, category, filteredTable });
  } catch (error) {
    console.log(error);
  }
};

export const filterCategory = (value) => async (dispatch) => {
  const filteredCoffees = coffeesDB?.filter((e) =>
    e.title.toLowerCase().includes(value.toLowerCase())
  );
  dispatch({ type: actionTypes.FILTER, filteredCoffees });
};
