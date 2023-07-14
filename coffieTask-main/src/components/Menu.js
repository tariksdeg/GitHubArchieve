import React from "react";
import { useDispatch } from "react-redux";
import {
  changeCategory,
  filterCategory,
} from "../redux/actions/coffeesActions";

const Menu = (data) => {
 
  const dispatch = useDispatch();
  const getChangeCategory = (category) => {
    dispatch(changeCategory(category));
  };
  const getSearchCategory = (value) => {
    dispatch(filterCategory(value));
  };

  return (
    <div className="d-inline position-relative pt-3">
      <form>
        <input
          className=" form-control me-2 border-success search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => getSearchCategory(e.target.value)}
        ></input>
      </form>
      <br />
      <h6
        className={data?.category === "all" ? "text-primary" : "text-secondary"}
        onClick={() => getChangeCategory("all")}
      >
        All Coffees
      </h6>
      <h6
        className={data?.category === "hot" ? "text-primary" : "text-secondary"}
        onClick={() => getChangeCategory("hot")}
      >
        Hot
      </h6>
      <h6
        className={
          data?.category === "iced" ? "text-primary" : "text-secondary"
        }
        onClick={() => getChangeCategory("iced")}
      >
        Iced
      </h6>
    </div>
  );
};

export default Menu;
