import {useState} from 'react';

const Nombre = () => {
    const [count, setCount] = useState(0);
    const [nombre, setNombre] = useState('');
    const loguear  = (e) => {
        setNombre(e.target.value);
    }
    const sumarUno =() => 
    {
        setCount(count + 1);
    }
    return (
        <>
            <label>Ingrese su nombre</label>
            <input type = "text" onChange={loguear}></input>
            <div>
            <button onClick={sumarUno} >Sumar uno!!!!!!</button>
            </div>
            <div>
                <h1>Hoiciste click {count} veces</h1>
            </div>
            <div>
                <h1>Buen dia {nombre}</h1>
            </div>
        </>
        
    )
}

export default Nombre;