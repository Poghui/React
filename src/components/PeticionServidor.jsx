import { useState, useEffect } from 'react';
import axios from 'axios';

const getPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    console.log(5555555, data)
    return data.results;
}

console.log(11111)
const PeticionServidor = () => {
    const [names, setNames] = useState([]);
    useEffect(() => {
        getPokemon().then((pokemon) => {
            console.log(pokemon)
            setNames(pokemon);
        })
    }, [])
    console.log(11)
    return (
        <div>{names.map(name => name.name)}</div>
    )
}

export default PeticionServidor