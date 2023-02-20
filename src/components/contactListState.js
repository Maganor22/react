import React, { useState } from "react";

function ListOfPersonsState() {
    const [maListeState, setMaListeState] = useState([
        { nom: "Jean", age: 25 },
        { nom: "Marie", age: 28 },
        { nom: "Luc", age: 31 },
    ]);

    const handleAjout = () => {
        const nom = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        setMaListeState([...maListeState, { nom, age }]);
    };

    return (
        <div>
            <input type="text" placeholder="Entre votre nom" id="name" />
            <input type="text" placeholder="Entrer votre age" id="age" />
            <button onClick={handleAjout}>Ajouter à la liste</button>
            <ul>
                {maListeState.map((personne) => (
                    <li key={personne.nom}>
                        {personne.nom}, {personne.age} ans
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListOfPersonsState;