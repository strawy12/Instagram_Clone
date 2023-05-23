import React,{useState, useEffect} from 'react';
import '../styles/App.scss';
import Navigation from "./Navgation";
import Cards from "./Cards"
import Sidebar from "./Sidebar"
import Axios, { AxiosResponse} from 'axios';
import {User} from'../data/Define';



function App():JSX.Element {

  let [cookie, setCookie] = useState<boolean>(false);
  useEffect(() => {
      Axios.get('http://localhost:3001/cookie/set').then((res:AxiosResponse) => {
        console.log(1);
    });
    }); 
      
  useEffect(() => {
      Axios.get('http://localhost:3001/cookie/get').then((res:AxiosResponse) => {
      setCookie(true);
      console.log(2);
      });
    });

if(cookie == false) return <div>Loading</div>;

  return (
    <div className="App">
        <Navigation />
        <main>
          <div className="container">
            <Cards />
            <Sidebar />
          </div>
        </main>
    </div>
  );
}

export default App;
