import React, { Component } from "react";
import LogVoiture from "./voiture.js";

class ListOfCars extends Component {
    state = {
        infoVoiture: [
            { nom: "Clio2", marque: "Renault" },
            { nom: "Urus", marque: "Lamborghini" },
            { nom: "F411", marque: "Ferrari" }
        ],
        cars: []
    };

    componentDidMount() {
        const cars = LogVoiture(this.state.infoVoiture);
        this.setState({ cars });
    }

    handleClick = () => {
        const nom = document.getElementById("nom").value;
        const marque = document.getElementById("marque").value;

        if (nom === "" || marque === "") {
            alert("Veuillez entrer un nom et une marque.");
        } else {
            const newCar = { nom, marque };
            const allCars = [...this.state.infoVoiture, newCar];
            const cars = LogVoiture(allCars);
            this.setState({ cars });
        }
    };

    render() {
        return (
            <div>

                <input type="text" id="nom" placeholder="Nom"></input>
                <input type="text" id="marque" placeholder="Marque"></input>
                <button onClick={this.handleClick}>Ajouter une voiture</button>
                <ul>
                    {this.state.cars.map((car, index) => (
                        <li key={index}>
                            {car}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ListOfCars;
