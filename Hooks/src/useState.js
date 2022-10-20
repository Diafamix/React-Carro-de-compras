import { useState } from 'react'

// Reglas de los hooks
// Tiene que estar en el nivel mas alto, no se llama en loops, ni condiciones
// ni while ni nada.

// Solo se llama en dos partes.
// Componentes de react 
// Custom hooks
// Cuando creaemos un custom hook use

const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial)
    const incrementar = () => {
        setContador(contador + 1)
    }

    return [contador, incrementar]
}

const App = () => {
    const [contador, incrementar] = useContador(0);

    return (
        <div>
            Contador: {contador}
            <botton onClick={incrementar}>Incrementar</botton>
        </div>
    )
}

export default useState;