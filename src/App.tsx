import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./List";
import AddToList from "./AddToList";

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]

}

function App(){

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      url: "abe",
      note: "Allegeric to staying on the same team"
    },
    {
      name: "LeBron James",
      age: 35,
      url: "abe",
      note: "Allegeric to staying on the same team"
     }
  ])



  return (
    <div className="App">
      <h1>Pepple invited my party</h1>
      <List people= {people} />
      <AddToList />
      <p>his</p>
    </div>
  );
}

export default App;
