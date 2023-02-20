import React, { useState } from 'react';

function CounterButtonState() {
    const [compteur, setCompteur] = useState(0);

    return (
        <div>
            <button onClick={() => setCompteur(compteur + 1)}>Click Me {compteur}</button>
        </div>
    )
}



export default CounterButtonState;

