import { useState } from "react";

export default function SearchBar(props) {
   const [character, setCharacter] = useState("")

   const handleChange = (evento) => {
      const { value } = evento.target
      setCharacter(value)
   }

   return (
      <div>
         <input type='search' onChange={handleChange} />
         <button onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}

