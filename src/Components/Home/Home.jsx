/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Home.css";
import Cart from '../Cart/Cart';
const Home = () => {
  const[AllActors,setALLActors]=useState([])
  const[selectedActors,setSelectedActors]=useState([]);
  const [remaning,setRemaning]=useState(0);
  const [totalCost,setTotalCost]=useState(0);
   useEffect(()=>{
    fetch("./Data.json")
    .then((res)=>res.json())
    .then((data)=>setALLActors(data))
   },[])
 const handleSelected=(actor)=>{
  const isExit=selectedActors.find((item)=>item.id==actor.id)
  let count=actor.salary
  if (isExit) {
    alert("Already booked")
  }
  else{
    setSelectedActors([...selectedActors,actor])
    selectedActors.forEach((item)=>{
      count=count+item.salary;
    });
    const totalRemnaing=20000-count;
    if (count>20000) {
      return alert("Cross your limit")
    }else{
      setTotalCost(count)
      setRemaning(totalRemnaing)
    }
    
  }
    
 }

    return (
         <div className="Container">
          <div className="Home-Container">
          <div className="card-container">
          {
              AllActors.map((actor)=>(
                <div key={actor.id} className="Card">
              <div className="Card-img">
              <img className="photo" src={actor.image} alt="" />
              </div>
              <h2>{actor.name}</h2>
              <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, fugit.</small></p>
              <div className="info">
                  <p>Salary:{actor.salary} $</p>
                  <p>{actor.role}</p>
                </div>
                <button onClick={()=>handleSelected(actor)} className='button-btn'>Select</button>
            </div>
              ))
          }
          </div>
            <div className="cart">
            <Cart selectedActors={selectedActors}remaning={remaning}totalCost={totalCost}></Cart>
            </div>
               
          </div>
         </div>
    );
    
};

export default Home;