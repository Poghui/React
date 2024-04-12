import { useState } from 'react'
import Popup from './components/Popup'

const AppPopup = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <button className='hi' onClick={() => setVisible(true)}>Abreme!</button>
            <Popup isVisible={visible} setIsVisible={setVisible}></Popup>
        </div>
    )
}

export default AppPopup