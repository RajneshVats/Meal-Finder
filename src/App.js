
import './App.css';
import React , { useEffect, useState } from 'react';
import Searched from './Searched';
import RandomMeal from './RandomMeal';

function App() {
  const [meals,setmeals]=useState({});
  const [item,setitem]=useState("");
  const [searchoption,setsearch]=useState(false)
  const [randomsearch,setrandom]=useState(false)

  function Tosearch(e){
    setitem(e.target.value);
    
  }

  async function DisplayMeals(){
    setrandom(false);
    if(item!="")
  { const data= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+item);
   const data2= await data.json();
   console.log(data2);
   setmeals(data2);
   setsearch(true);}
   
 }
 async function Searchmeal(){
   setsearch(false);
   const randommeal=await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
   
   const data3= await randommeal.json();
   setmeals(data3);
  // console.log("data3 is ",data3)
  // console.log(meals)
   setrandom(true);

 }

  return (
    <>
    <h1>Meal Finder</h1>
    <input placeholder='Search meals or keywords' onChange={(e)=>{Tosearch(e);}}></input>
    <button onClick={()=>{DisplayMeals();}}>Search</button>
    <button onClick={()=>{Searchmeal();}}>Shuffle</button>
      <Searched searchoption={searchoption} meals={meals} item={item}/>
      <RandomMeal randomsearch={randomsearch} meals={meals}/>
    </>

  );
}

export default App;
