import React, { useState } from 'react';

function Hello() {
    const [name, setName] = useState("")

    return (
        <div>
            <h1>Bonjour, {name}</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
    )
}

export default Hello;
