import ilustration from "./assets/img/illustration.svg";
import logo from "./assets/img/NuKenzie.svg";
import { useState } from 'react';
import { Form } from "./components/Form";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
import { Header } from "./components/Header";
import { Button } from "../src/components/Button/Button";

import "./App.css";

function App() {

  const [listTransitions, setListTransitions] = useState([
    { description: "Salário recebido", type: "Entradas", value: 2500.5 },
    { description: "Conta de luz", type: "Despesas", value: -150 }
  ])

  const [listFilter, setListFilter] = useState(listTransitions)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  return (
    <div className="App">
      {isLoggedIn ? 
        <div className="App-header">
          <Header setIsLoggedIn={setIsLoggedIn}/>
          <main>
            <section>
              <Form listTransitions={listTransitions} setListTransitions={setListTransitions} listFilter={listFilter} setListFilter={setListFilter}/>
              <TotalMoney listTransitions={listTransitions} />
            </section>
            <List listTransitions={listTransitions} setListTransitions={setListTransitions} listFilter={listFilter} setListFilter={setListFilter}/>
          </main>
        </div>
        :
        <main className="container container-home-page">
          <section className="section-interaction">
            <img src={logo} alt="imagem da logo" />
            <div className="container-interaction">
              <h1>Centralize o controle das suas finanças</h1>
              <span className="text-1">de forma rápida e segura</span>
              <Button children={"Iniciar"} classAndColor={"btn-pink"} handleBtn={() => setIsLoggedIn(true)}/>
            </div>
          </section>
          <section className="section-ilustration">
            <img src={ilustration} alt="imagem ilustrativa" />
          </section>
        </main>
      }
    </div>
  );
}

export default App;
