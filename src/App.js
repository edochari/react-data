// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import axios from 'axios';


// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       temp:''
//     }
//   }

//   getData=()=>{
//     let url="  http://localhost:3004/data";
//     axios.get(url).then((response)=>{console.log("response",response);
//     this.setState({
//       temp:response.data,
//     });
//   })
   
//   }
//   render(props){
//   return (
//     <div>
//      <h1>Data</h1>
//      <button onClick={()=>this.getData()}>GET DATA</button>
//      <p>current data is {this.state.temp} </p>
//      </div>
//   );
// }
// }

// export default App;

import React, { Component } from "react";
import {  Table } from "semantic-ui-react";
import data from './data.json';

class App extends Component {
 
  render() {
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Fullname</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map(el => {
            return (
              <Table.Row key={el.name}>
                <Table.Cell>{el.name}</Table.Cell>
                <Table.Cell>
                  {el.uom} 
                </Table.Cell>
                <Table.Cell>{el.qty}</Table.Cell>
                <Table.Cell>{el.price}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}

export default App;
