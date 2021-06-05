import React, { useEffect, useState } from'react';
import covid from'./images.jpg'
import'./App.css';

 function Covid(){
     const [data, setdata]=useState([]);
const getCovidData= async()=>{
   try{
    const ref=await fetch('https://api.apify.com/v2/key-value-stores/QhfG8Kj6tVYMgud6R/records/LATEST?disableRedirect=true');
   const livedata=await ref.json();
    console.log(livedata)  
setdata(livedata )
}
   catch(err){
    console.log(err)
   }
    


}
    
     useEffect(()=>{
getCovidData();
     },[]    )
      return(
<div className="main">
   <div className="text-area">
      CORONA CASES IN PAKISTAN 
   </div>
   
   <div className="row">
   <div className="card">
          <div id="card-header" className="card-header">
           <span>Our Country</span> <h1>PAKISTAN</h1>
            
          </div>
         
        </div>
    
        <div className="card">
          <div id="card1-header" className="card-header">
            <span>TOTAL</span><h1>Cases</h1>
            <h1>{data.infected}</h1>
          </div>
          {/* <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.
            </p>
            <a href="#" className="btn">Read more</a>
          </div> */}
        </div>
        <div className="card">
          <div id="card2-header" className="card-header">
           
            <span>TOTAL</span><h1>Recovered</h1>
            <h1>{data. recovered}</h1>
          </div>
          {/* <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.
            </p>
            <a href="#" className="btn">Read more</a>
          </div> */}
        </div>
        <div className="card">
          <div id="card3-header" className="card-header">
          <span>TOTAL</span><h1>Deaths</h1>
            <h1>{data. deceased}</h1>
          </div>
          {/* <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.
            </p>
            <a href="#" className="btn">Read more</a>
          </div> */}
        </div>

        <div className="card">
          <div id="card4-header" className="card-header">
          <span>TOTAL</span><h1>Tested</h1>
            <h1>{data. tested}</h1>
          </div>
          {/* <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.
            </p>
            <a href="#" className="btn">Read more</a>
          </div> */}
        </div>
        <div className="card">
          <div id="card5-header" className="card-header">
          <h1>Update</h1>
            <h4>{data. lastUpdatedAtApify}</h4>
          </div>
          {/* <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.
            </p>
            <a href="#" className="btn">Read more</a>
          </div> */}
        </div>
      </div>

   </div>
     );}
export default Covid;