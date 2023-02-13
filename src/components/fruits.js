import React from "react";

function MyFruit({ fruits }) {
    let panier = fruits.map(fruit => `J'ai un(e) ${fruit}, `);
    return <p>Qu'est-ce que j'ai dans mon panier : {panier}</p>;
}

export default MyFruit;