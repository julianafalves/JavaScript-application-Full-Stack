import React from 'react';
//import Logon from './pages/logon'
import './global.css'
import Routes from './routes'
//import { Route } from 'react-router-dom';

/*
function App() {
  return (
    <Header title= "semana oministack"/>
  );
}

function App() {
  const [counter, setCounter] = useState(0) //estado pois uma variavel n mudaria o html no react

  function increment(){
    setCounter(counter + 1)
    console.log(counter)
  }

  return (
    <div>
    <Header>Contador: {counter} </Header> 
    <button onClick={increment}> Incrementar </button>
    </div>
  );
}
*/

function App() {
  return(
    <Routes />
  )
}
export default App;
