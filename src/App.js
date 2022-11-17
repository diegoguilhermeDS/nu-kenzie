import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';
import { List } from './components/List';

function App() {

  const [listTransitions, setListTransitions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
  ])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Form/>
        <List listTransitions={listTransitions}/>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
