import React, { useState, useEffect, useRef } from 'react';

export default function Pendu() {
    const words = [
        "bonjour",
        "perpendiculaire",
        "javascript",
        "react",
        "orientation",
        "garage",
        "voiture"
    ];
    const [lettersUsed, setLettersUsed] = useState([]);
    const [word] = useState(words[Math.floor(Math.random() * words.length)]);
    const [count, setCount] = useState(word.length);
    const [hiddenWord, setHiddenWord] = useState(word.split("").map(() => "_"));
    const [errors, setErrors] = useState(5);
    const [isGameWon, setIsGameWon] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        let counted = document.getElementById("counted");
        counted.textContent = `Il vous reste : ${errors} essais`;
    }, [errors]);

    useEffect(() => {
        if (hiddenWord.join("") === word) {
            setIsGameWon(true);
        }
    }, [hiddenWord, word]);

    const handleCheck = (input) => {
        if ((errors === 0) || (isGameWon) || (inputRef.current.value === "")) { return; }
        if (inputRef.current.value.length > 1) {
            alert("Veuillez entrer une seule lettre");
            inputRef.current.value = "";
            inputRef.current.focus();
            return;
        }
        if (word.includes(input)) {
            setCount(count - 1);
            let newHiddenWord = [...hiddenWord];
            for (let i = 0; i < word.length; i++) {
                if (word[i] === input) {
                    newHiddenWord[i] = input;
                }
            }
            setHiddenWord(newHiddenWord);
        } else {
            setErrors(errors - 1);
        }
        setLettersUsed([...lettersUsed, input]);
        inputRef.current.value = "";
        inputRef.current.focus();
    };

    return (
        <div>
            <input type="text" id="input" ref={inputRef}></input>
            <button onClick={() => handleCheck(document.getElementById("input").value)}>Check</button>
            {isGameWon && <h1>Vous avez gagné !</h1>}
            {errors === 0 && <h1>Vous avez perdu ! Le mot était : {word}</h1>}
            <h1>
                {hiddenWord.map((letter, index) => {
                    return (
                        <span key={index}>{letter} </span>
                    )
                })}
            </h1>
            <h2 id="allLetters">Lettres utilisées : {lettersUsed.join(', ')}</h2>
            <h3 id="counted">Il vous reste : {errors} essais</h3>
            <h3>Le mot contient {word.length} lettres à trouver</h3>
        </div>
    );
}