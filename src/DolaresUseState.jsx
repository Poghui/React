import { useRef, useState } from 'react';

const DolaresUseState = () => {
    const eurosRef = useRef();
    const [dolares, setDolares] = useState(0);
    const calculate = () => {
        const euros = eurosRef.current.value;
        setDolares(euros * 1.2)
    }
    return (
        <div>
            <input type="text" ref={eurosRef} /><br />
            <button onClick={calculate}>Euros</button><br />
            {dolares} dolares
        </div>
    )
}

export default DolaresUseState