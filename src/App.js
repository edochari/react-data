import logo from './logo.svg';

import React,{useState} from 'react';
import axios from 'axios';
import OutputComponent from './OutputComponent';

const App=()=> {
  
 const [Data,setData] =useState('');

  const getData=()=>{
    let url=" https://my-json-server.typicode.com/edochari/react-data/result";
    axios.get(url).then((response)=>{console.log("response",response.data);
    setData( response.data); 
  })
   
  }

  return (
    <div>
     <h1>Data</h1>
     <p>Click on get Data</p>
     <button onClick={getData}>GET DATA</button>
     <p>current data is</p>
     <OutputComponent items={Data}> </OutputComponent>
     </div>
  );
}


export default App;
