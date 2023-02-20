import React from "react";

export default function ButtonsGoal() {
    function handleClick(e) {
        alert(e.target.textContent)
        //e.target.id === "but" ? alert(e.target.textContent) : alert(e.target.textContent);
    }

    return (
        <div>
            <button id="but" onClick={handleClick}>
                C'est le but
            </button>
            <button id="gradins" onClick={handleClick}>
                C'est les gradins
            </button>
        </div>
    );
}