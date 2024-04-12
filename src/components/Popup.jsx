import { Overlay, Content } from '../app/styled'
import { Pop } from '../app/styled'

const Popup = ({ isVisible, setIsVisible }) => {
    return (
        <Pop isVisible={isVisible}>
            <Overlay />
            <Content>
                <img style={{ width: 500 }} src="https://i.pinimg.com/736x/cd/05/9b/cd059bd6e9f96c3dac10d742ee67ae4f.jpg" />
                <button onClick={() => setIsVisible(false)}>Cerrar</button>
            </Content>
        </Pop>

    )
}

export default Popup