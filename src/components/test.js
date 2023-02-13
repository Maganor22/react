function GoHello() {
    return <div class="container">
        <img src="https://imgs.search.brave.com/zaj7hKVBwiuihWan8brvB5Or-4VEHjIORgZRqb0Y2BY/rs:fit:250:177:1/g:ce/aHR0cHM6Ly9zdGlj/a2Vycy5nZy9hc3Nl/dHMvc3RpY2tlcnMv/NzUyOC1tZW1lLXRy/b2xvbG9sby5wbmc" alt="text"></img>
    </div>
}

function Hello(props) {
    return <h1>Bonjour, {props.name}</h1>
}

export {Hello, GoHello}