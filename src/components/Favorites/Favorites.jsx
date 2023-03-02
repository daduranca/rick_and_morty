import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterCards, orderCards, allCards } from "../../redux/actions";

export function Favorites(props) {
    const { myFavorites } = props;
    const dispatch = useDispatch()

    const handleFilter = (evento) => {
        console.log(evento.target.value)
        dispatch(filterCards(evento.target.value))
    }

    const handleOrder = (evento) => {
        dispatch(orderCards(evento.target.value))
    }

    const handleAll = (evento) => {
        evento.preventDefault()
        dispatch(allCards())
    }

    return (
        <div>
            <div>
                <select name="" onChange={handleOrder}>
                    <option value="order" disabled>Order by</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="" onChange={handleFilter}>
                    <option value="filter" disabled>Filter by</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
                <button onClick={handleAll}>All</button>
            </div>
            {myFavorites.map(character => (
                <div>
                    <h2 className="">{character.name}</h2>
                    <Link to={`/detail/${character.id}`}>
                        <img src={character.image} alt={character.name} />
                        <h2>{character.species}</h2>
                        <h2>{character.gender}</h2>
                    </Link>
                </div>
            ))}

        </div>
    );
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);