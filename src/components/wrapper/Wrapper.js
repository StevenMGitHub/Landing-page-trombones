import React from 'react'
import Header from '../header/Header';
import Main from '../main/Main';

function Wrapper() {
  return (
    <>
        <div id="page-wrapper">
            <Header></Header>
            <Main></Main>
        </div> 
    </>
  )
}

export default Wrapper;