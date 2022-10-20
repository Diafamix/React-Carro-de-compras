import { useReducer, useRef } from 'react'

const App = () => {
    const ref = useRef()
    const inputRef = useRef()

    const click = () => {
        console.log(ref.current.clientHeight)
        ref.current.innerHTML = 'Hola'
    }

    const focus = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={focus}>Focus</button>
            <div onClick={click} ref={ref}>eswfdsaf</div>
        </div>
    )
}

export default prueba
