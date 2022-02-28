import react, { useState } from "react";
import ShowDetails from "./ShowDetails";
function Searched(props){
    const [details,setdetails]=useState(null);

   
  if(props.searchoption){
      //console.log(props.meals);
      return <>
      <h2>Search results for {props.item}</h2>
      {props.meals.meals.map((meal,index)=>{
         // console.log(index);
          return <>
          <div>
          <img src={meal.strMealThumb} style={{width:'200px' , height:'200px' , margin:'5px'}} key={index} onClick={(e)=>{ 
              console.log(index)
              e.stopPropagation();
              setdetails(index)}}></img>
            
           </div>
          </>

      })}
      <ShowDetails meals={props.meals.meals} details={details}/>
      
      </>
  }
  else return null
}
export default Searched