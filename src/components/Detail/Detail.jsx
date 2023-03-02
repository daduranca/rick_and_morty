import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Detail(props) {
    const { detailId } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);

    console.log(character.origin)

    return (
        <div>
             <h1>Detail</h1>
            <h2>{character.name}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.species}</h2>
            <h2>{character.status}</h2>
            {character.origin && <h2>{character.origin.name}</h2>}
            {character.origin && <h2>{character.location.name}</h2>}
            <img src={character.image} alt={character.name} /> 
        </div>
    )
}