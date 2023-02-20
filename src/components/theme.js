import React, { useState, useEffect, useContext } from 'react';
import { ExempleContext } from './App';

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const data = useContext(ExempleContext);

  useEffect(() => {
    const h1 = document.querySelectorAll('h1');
    let myBtn = document.getElementById("myBtn")
    myBtn.textContent = darkMode ? "Thème : Sombre" : "Thème : Clair"
    document.body.style.backgroundColor = darkMode ? '#282c34' : 'white';
    h1.forEach((element) => (element.style.color = darkMode ? 'yellow' : 'red'));
  }, [darkMode]);

  return (
    <div>
      <div>{data}</div>
      <button id="myBtn" onClick={() => setDarkMode(!darkMode)}></button>
    </div>
  );
}

