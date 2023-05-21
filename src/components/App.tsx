import React, { useState, useEffect } from 'react';

import '../styles/App.scss';
import Navigation from "./Navgation";
import Cards from "./Cards"
import Sidebar from "./Sidebar"
import DB from "../data/DB";

function App():JSX.Element {

  console.log(1);
  const [isComplete, setIsComplete] = useState(false);

  if(DB.Inst == null)
  {
    DB.Inst = new DB();
  }
  useEffect(() =>
    {
      DB.Inst.Init(setIsComplete);
    });

  return (
    <div className="App">
    {isComplete ? 
          <div>
          <Navigation/>
            <main>
              <div className='container'>
                <Cards />
                <Sidebar />
              </div>
            </main> 
          </div>
      :
      "loading"
    }
    </div>
  );
}

export default App;
