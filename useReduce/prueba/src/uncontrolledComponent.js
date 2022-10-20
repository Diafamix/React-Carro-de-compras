function App() {
    const submit = (e) => {
        e.preventDefault()
        const data = Array.fram(new FormData(e.target))
        console.log(Object.fromEntries(data))
    }

    return (
        <form onSubmit={submit}>
            <div>
                <span>
                    alalla
                </span>
                <input name='campo'/>
            </div>
            <input name='campo-2'/>
            <input type='file' name='archivo'/>
            <input type='submit' value='Enviar' />
        </form>
    )
}


export default uncontrolledComponent