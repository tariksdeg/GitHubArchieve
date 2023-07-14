import React from "react";
import Coffee from "./Coffee";

const Coffees=(data)=> {
  
  return (
    <div className="mt-3">
      
       
        {data.coffeeReducer.coffeesTable.map((coffee)=><Coffee coffee={coffee} key={coffee.id}/>)}
        
      
    </div>
  );
  
}

export default Coffees;
