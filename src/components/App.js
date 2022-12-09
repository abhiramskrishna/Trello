import React from 'react';
import Header from '../Layout/Header';
import Lists from './Lists';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';



export default () => {

  const ClearData=()=>{
    localStorage.clear();
  } 
  return (
  
  <React.Fragment>
    <GlobalStyle />
  <button  className="button" onClick={()=> ClearData()}>
    Clear
  </button>
    
    
    
    <Header />
      <Lists />
  </React.Fragment>)
}

const GlobalStyle = createGlobalStyle`
body {
  color: #fff;
  background: #d68d8d;
  font-size: 16px;
  font-family: 'Livvic';
}
.button 
{
  
  padding: 10px 20px;
  margin: 2px;
  border: none;
  outline: none;
  background: rgba(19, 19, 19, 0.2);
  color: #fff;
  cursor: pointer;
}

`;



