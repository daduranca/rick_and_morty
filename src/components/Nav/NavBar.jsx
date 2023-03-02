import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom"

export default function NavBar(props) {
    return (
        <div>
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
            <NavLink to="/about">
                <button>About</button>
            </NavLink>
            <NavLink to="/favorites">
                <button >Favorites</button>
            </NavLink>
            <NavLink to="/">
                <button>Log out</button>
            </NavLink>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}