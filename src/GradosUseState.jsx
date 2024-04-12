import { useState, useRef } from 'react'

const GradosUseState = () => {
    const gradosRef = useRef();
    const [farin, setFarin] = useState(0);
    const transform = () => {
        const gradosc = gradosRef.current.value;
        setFarin((gradosc * 9 / 5 + 32).toFixed(2))
    }

    return (
        <div>
            <input type="text" placeholder='grados' ref={gradosRef} />
            <button onClick={transform}>Transformar</button>
            {farin}
        </div>
    )
}

export default GradosUseState