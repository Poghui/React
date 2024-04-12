import { Box } from './app/styled'
import './app/styles.css'
import imgyoshi from './assets/yoshi.jpg'

const StylesPrueba = () => {
    return (
        <div>StylesPrueba
            <div className="prueba"><p>Hola que tal?</p><p>Soy una prueba</p></div>
            <img src={imgyoshi} />
            <Box><span> HOLAAAAAAAAAAAAAAAAAAAA</span></Box>
            <Box color='blue' l='600' />
            <Box />
            <Box />

        </div >
    )
}

export default StylesPrueba