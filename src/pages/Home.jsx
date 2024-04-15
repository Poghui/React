import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';




const Home = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Home</h1>
            {/* <ul>
            {/* <li><Link to="/">Home</Link></li>    */}
            {/* <li><Link to="/page2">Page2</Link></li> */}
            {/* <li><Link to="/ajksdfkjhasdk">Error en la url</Link></li> */}
            {/* </ul> */}
            {id}
            <Link to="product/BUENOS DÍAS">Producto 1</Link>
        </div>
    )
}

export default Home;