import { useRef } from 'react';

const Superficie = () => {
    const largoRef = useRef();
    const altoRef = useRef();
    const superRef = useRef();
    const calculate = () => {
        const largo = largoRef.current.value;
        const alto = altoRef.current.value;
        const superf = alto * largo;
        superRef.current.innerHTML = superf
    }
    return (
        <div>
            <input type="text" placeholder='largo' ref={largoRef} />
            <input type="text" placeholder='alto' ref={altoRef} />
            <button onClick={calculate}>Transformar</button>
            <div ref={superRef}></div>
        </div>
    )
}

export default Superficie