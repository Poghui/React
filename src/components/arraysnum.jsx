import { useState } from 'react'

const arraysnum = () => {
    const [elementos, setElementos] = useState(0)

    return (
        < div >
            <input type="text" onChange={(e) => setElementos(Number(e.target.value))} />
            Introduce un número del 1-9:
            {[...Array(elementos)].map(() => (
                <input type="text" />
            ))}

        </div >
    )
}

export default arraysnum