import { ADD_CHARACTER, DE, DEL_CHARACTER } from "./type";

export function addCharacter(character) {
    return {
        type: ADD_CHARACTER,
        payload: character
    }
}

export function delCharacter(id) {
    return {
        type: DEL_CHARACTER,
        payload: id
    }
}

export function filterCards(gender) {
    return {
        type: "FILTER",
        payload: gender
    }
}

export function orderCards(id) {
    return {
        type: "ORDER",
        payload: id
    }
}

export function allCards() {
    return {type: "ALL_CARDS"}
}