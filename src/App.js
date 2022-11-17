import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';
import { List } from './components/List';
import {TotalMoney} from "./components/TotalMoney"

function App() {

  const [listTransitions, setListTransitions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500.5 },
    { description: "Conta de luz", type: "saída", value: -150 }
  ])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TotalMoney listTransitions={listTransitions}/>
        <Form/>
        <List listTransitions={listTransitions}/>
        
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
