import { But } from './app/styled'
import { useState } from 'react'

const PropsImportant = () => {
    const [color, setColor] = useState()
    return (
        <div>
            <button onClick={() => setColor(!color)}>Cambiar color</button>

            <But isRed={color} />
        </div>
    )
}

export default PropsImportant