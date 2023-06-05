import React, { useState } from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ReferandEarn from "./components/referAndEarn/referAndEarn.js";
import { createContext, useReducer } from "react";
import LoadingBar from "react-top-loading-bar";
 
// contextAPI
export const UserContext = createContext();

const Routing = ()=>{
  return(
    <BrowserRouter>
      <LoadingBar
          color='#92a49c'
          height={3}
        />
      <Routes>
        <Route index element= {<ReferandEarn/>}/>
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <>
    <UserContext.Provider>
      <Routing/>
    </UserContext.Provider>
    </>
  );
}

export default App;
