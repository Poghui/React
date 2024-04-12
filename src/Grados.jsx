import { useRef } from 'react';

const Grados = () => {
    const gradosRef = useRef();
    const FarinRef = useRef();
    const transform = () => {
        const gradosc = gradosRef.current.value;
        FarinRef.current.innerHTML = (gradosc * 9 / 7 + 32).toFixed(2)
    }

    return (
        <div>
            <input type="text" ref={gradosRef} />
            <button onClick={transform}>Transformar</button>
            <div ref={FarinRef}></div>
        </div>
    )
}

export default Grados