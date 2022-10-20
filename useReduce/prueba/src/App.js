import { useState  } from "react"

const App = () => {
    const [value, setValue] = useState({ 
        normal: 'Valor por defecto', 
        texto: 'Texto por defecto! ', 
        select: '',
        check: false,
        estado: 'r1'
    })
    const handleChange = (e) => {
        setValue((state) => {
            return ({
                ...state,
                [e.target.name]: e.target.type === 'checkbox' 
                ? e.target.checked 
                : e.target.value //Remplaza propiedades de manera dinamica
            })
        })
    }

    return (
        <div>
            {value.length < 5 ? <span>longitud minima de 5</span> : null}
            <input type="text" name="normal1" value={value.normal} onChange={handleChange}/>
            <textarea name='texto' onChange={handleChange} value={value.texto}/>
        
            <select value={value.select} name='select' onChange={handleChange}>
                <option value=''>--- Seleccione --</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>

            <input 
                type='checkbox' 
                name='check'
                onChange={handleChange}
                checked={value.check}
            />

            <div>
                <label>Hola</label>
                <input 
                    onChange={handleChange} 
                    type='radio' 
                    value='r1' 
                    name='estado' 
                    checked={value.estado === 'r1'}
                /> 1
                <input 
                    onChange={handleChange} 
                    type='radio' 
                    value='r2' 
                    name='estado' 
                    checked={value.estado === 'r2'}
                /> 2
                <input 
                    onChange={handleChange} 
                    type='radio' 
                    value='r3' 
                    name='estado' 
                    checked={value.estado === 'r3'}
                /> 3
            </div>
        </div>
    )
}



export default App