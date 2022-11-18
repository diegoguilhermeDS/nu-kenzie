import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';
import { List } from './components/List';
import { TotalMoney } from "./components/TotalMoney"
import { Header } from "./components/Header"


function App() {

  const [listTransitions, setListTransitions] = useState([
    { description: "Salário recebido", type: "Entradas", value: 2500.5 },
    { description: "Conta de luz", type: "Despesas", value: -150 }
  ])

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  
  return (
    <div className="App">
      {isLoggedIn ? 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header setIsLoggedIn={setIsLoggedIn}/>
          <TotalMoney listTransitions={listTransitions} />
          <Form listTransitions={listTransitions} setListTransitions={setListTransitions}/>
          <List listTransitions={listTransitions} setListTransitions={setListTransitions}/>
        </header>
        :
        <main>
          <h1>Home page</h1>
        </main>
      }
    </div>
  );
}

export default App;
