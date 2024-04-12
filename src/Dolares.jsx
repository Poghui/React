import { useRef } from 'react';

const Dolares = () => {
    const eurosRef = useRef();
    const DolaresRef = useRef();
    const calcular = () => {
        const euros = eurosRef.current.value;
        DolaresRef.current.innerHTML = euros * 1.2


    }
    return (
        <div>
            <input type="text" ref={eurosRef} />
            <button onClick={calcular}>Calcular</button>
            <div ref={DolaresRef}></div>
        </div >
    )
}

export default Dolares