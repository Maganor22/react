import React, { useState, useEffect } from 'react';

export default function Effect(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Vous avez cliqué ${count} fois`
    }, [count])

    return(
        <div>
            <h1>Compteur: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
}