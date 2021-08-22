


import React,{useState,useEffect} from 'react';
import NavBar from './components/NavBar';
import Gallery from './components/Gallery';
import About from './components/About';
import {Route,Switch} from 'react-router-dom';
import Blog from './components/Blog';

function App() {

  
  const [count,setCount] = useState(0);


  const Currencies = ["USD","INR","JPY","CHW","PKW","HDF"]

  const [base,setBase] = useState("USD");
  const [other,setOther] = useState("INR");

  useEffect(()=>{
    const count = localStorage.getItem("count");
    if(count != null){
      console.log(count)
    }


    window.addEventListener("beforeunload",()=>{
      localStorage.setItem("count",count);
    })
  },[])

  function increment(){
    setCount(count+1);
  }
  function decrement(){
    if(count === 0){
      return
    }
    setCount(count-1);
  }

  function makeSelectionBase(e){
      setBase(e.target.value)
    
  }
  function makeSelectionOther(e){
      setOther(e.target.value)
    
  }

  return (
      <>
        <NavBar/>
        <Switch>
          <Route exact path="/gallery" component={Gallery} />
          <Route path="/blog" component={Blog} />
        </Switch>
     
      </>
  );
}

export default App;
