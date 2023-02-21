//import logo from '../assets/logo.svg';
import '../styles/App.css';

/* import Welcome from './welcome.js'; */
//import {GoHello, Hello} from './test.js';
/* import Hello from './test.js' */
//import CounterButton from './counter.js';
//import MyName from './name.js';
//import MyCount from './thatCounter.js';
//import TimerDate from './timerDate.js';
/* import ListOfPersonsState from './contactListState.js'; */
/* import ListOfPersons from './contactList.js'; */
/* import MyFruit from './fruits.js';
import ButtonsGoal from './foot.js';
import ListOfCars from './garage.js';
 */
/* import CounterButtonState from './counterState';
import Effect from './effect.js'; */
/* import Background from './background.js';
import Pendu from './pendu.js'; */
/* import UsersList from './userlist.js';
import Header from './Header.js'; */
//import DarkMode from './theme.js'
//import { createContext } from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

/* let title = document.createElement("h1");
title.innerHTML = Welcome()
title.style.color = "red"
title.style.textAlign = "center"
document.body.appendChild(title) */

//const fruits = ['pomme', 'banane', 'orange', 'fraise', 'poire'];
const data = {
    labels: ["Rouge", "Bleu", "Vert", "Violet", "Orange", "Jaune"],
    datasets: [
      {
        label: "Couleurs préférées en France",
        data: ["50", "67", "15", "8", "80", "64"],
        backgroundColor: ["red", "blue", "green", "violet", "orange", "yellow"],
      },
    ],
  }

function App() {
    return (
        <div className="App">
            {/* <header className="App-header"> */}
                <div className="container">
                    <div className="card">
                        <Bar data={data} />
                    </div>
                </div>
                {/* <Header/> */}
                {/* <MyContext.Provider value={data}>
                    <ChildComponent />
                </MyContext.Provider> */}
                {/* <UsersList /> */}
                {/* <Pendu />
                <Background /> */}
                {/* <Effect /> */}
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                {/* <CounterButtonState /> */}
                {/* <ListOfCars/>
                    <ButtonsGoal/>
                <MyFruit fruits={fruits}/> */}
                {/* <ListOfPersonsState /> */}
                {/* <DarkMode /> */}
                {/* <TimerDate/>
        <MyCount/>
        <MyName/>
        <CounterButton/>
        <GoHello/>
        <Hello name="This is my name"/> */}
            {/* </header> */}
        </div>
    );
}

export default App;
