function ShowDetails(props){
   return<>
   {props.meals.map((meal,index)=>{
       if(index==props.details){
           const data = Object.keys(meal).filter((item)=>{
               if(item.includes('Ingredient')){
                   console.log("yes");
                   return item;
               }
           })
           const quan = Object.keys(meal).filter((item)=>{
                if(item.includes('Measure')){
                    return item;
                }
           })
          
           return <div style={{textAlign:'center'}}>
           <h1>{meal.strMeal}</h1>
           <img src={meal.strMealThumb} style={{width:'200px',height:'200px'}}></img>
           <div style={{padding:'30px', margin:'10px',border:'solid' , borderColor:'black', width:'200px',height:'50px',textAlign:'center' ,marginLeft:'300px'}}>
               <div>{meal.strCategory}</div>
               <div>{meal.strArea}</div>
           </div>
           <p>{meal.strInstructions}</p>
           <br/>
           <h1>Ingredients</h1>
           {data.map((key,index)=>{
               if(meal[key]!="" && meal[key]!=null)
             return <span style={{border:'solid',backgroundColor:'white', color:'black',borderColor:'none',borderRadius:'10%',margin:'5px',marginTop:'5px' ,marginBottom:'5px'}}>{meal[key]} - {meal[quan[index]]}</span>
           })}
           </div>
       }
       else return null
   })}
   </>
}
export default ShowDetails