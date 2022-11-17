import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';

function App() {

  const [listTransitions, setListTransitions] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Form/>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
