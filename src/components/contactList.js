import React, { Component } from "react";

class ListOfPersons extends Component {
    state = {
        maListe: [
            { nom: "Jean", age: 25 },
            { nom: "Marie", age: 28 },
            { nom: "Luc", age: 31 },
        ],
    };

    handleClickMore = () => {
        const nom = document.getElementById("name").value;
        const age = document.getElementById("age").value;
    
        if (age === "" || nom === "") {
            alert("Veuillez entre votre nom et age.");
        }else{
            this.setState((bState) => ({
                maListe: [...bState.maListe, { nom, age }],
            }));
        }
    };

    render() {
        return (
            <div>
                <input type="text" placeholder="Entre votre nom" id="name" />
                <input type="text" placeholder="Entrer votre age" id="age" />
                <button onClick={this.handleClickMore}>Ajouter à la liste</button>
                <ul>
                    {this.state.maListe.map((personne) => (
                        <li key={personne.nom}>
                            {personne.nom}, {personne.age} ans
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    
}

export default ListOfPersons;