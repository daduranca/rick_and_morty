import { ADD_CHARACTER, DEL_CHARACTER } from "./type"
const initialState = {
    myFavorites: [],
    allCharacters: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                myFavorites: [...state.allCharacters.filter(char => char.id != action.payload.id) , action.payload],
                allCharacters: [...state.allCharacters.filter(char => char.id != action.payload.id) , action.payload]
            }
        case DEL_CHARACTER:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(character => (
                    character.id !== action.payload
                ))
            }
        case "FILTER":
            const allCharFiltered = state.allCharacters.filter(char => (char.gender === action.payload))
            return {
                ...state,
                myFavorites: allCharFiltered 
            }
        case "ORDER":
            return {
                ...state,
                myFavorites:
                action.payload === "Ascendente" 
                ? state.allCharacters.sort((a,b) => a.id - b.id)
                : state.allCharacters.sort((a,b) => b.id - a.id)
            }
        case "ALL_CARDS":
            return {
                ...state,
                myFavorites: state.allCharacters
            }
        default:
            return { ...state }
    }
}
