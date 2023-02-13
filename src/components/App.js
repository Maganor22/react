import logo from '../assets/logo.svg';
import '../styles/App.css';
import Welcome from './welcome.js';
import {GoHello, Hello} from './test.js';
/* import Hello from './test.js' */
import CounterButton from './counter.js';
import MyName from './name.js';
import MyCount from './thatCounter.js';
import TimerDate from './timerDate.js';
import ListOfPersons from './contactList.js';
import MyFruit from './fruits.js';

let title = document.createElement("h1");
title.innerHTML = Welcome()
title.style.color = "red"
title.style.textAlign = "center"
document.body.appendChild(title)

const fruits = ['pomme', 'banane', 'orange', 'fraise', 'poire'];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyFruit fruits={fruits}/>
        <ListOfPersons/>
        <TimerDate/>
        <MyCount/>
        <MyName/>
        <CounterButton/>
        <GoHello/>
        <Hello name="This is my name"/>
      </header>
    </div>
  );
}

export default App;
