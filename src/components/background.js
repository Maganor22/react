import React, { useState, useEffect } from 'react';

export default function Background(){
    const [backgroundCol, setBackground] = useState(0)

    useEffect(() => {
        document.body.style.backgroundColor = backgroundCol;
    }, [backgroundCol])

    return(
        <div>
            <button onClick={() => setBackground("blue")}>Blue</button>
            <button onClick={() => setBackground("red")}>Rouge</button>
            <button onClick={() => setBackground("yellow")}>Jaune</button>
        </div>
    )
}


