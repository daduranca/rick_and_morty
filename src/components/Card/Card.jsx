import { Link } from "react-router-dom";
import { addCharacter, delCharacter } from "../../redux/actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";


export function Card(props) {
   const [isFav, setIsFav] = useState(false)
   const { addCharacter, delCharacter, myFavorites } = props

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      console.log(props)
      if (isFav) {
         setIsFav(false)
         delCharacter(props.id)
      } else {
         setIsFav(true)
         addCharacter(props)
      }
   }

   return (
      <div>
         { isFav ? ( <button onClick={handleFavorite}>F</button> ) : ( <button onClick={handleFavorite}>V</button> )}
         <h2>{props.name}</h2>
         <button onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}>
            <img src={props.image} alt={props.name} />
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </Link>
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addCharacter: (character) => dispatch(addCharacter(character)),
      delCharacter: (id) => dispatch(delCharacter(id))
   }
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)