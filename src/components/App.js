import React from 'react';
import Header from '../Layout/Header';
import Lists from './Lists';



export default () => {

  const ClearData=()=>{
    localStorage.clear();
  } 
  return (
  
  <React.Fragment>
  <button onClick={()=> ClearData()}>
    Clear
  </button>
    
    
    
    <Header />
      <Lists />
  </React.Fragment>)
}


