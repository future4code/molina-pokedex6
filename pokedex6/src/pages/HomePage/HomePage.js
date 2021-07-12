import React from 'react'
import { useHistory } from "react-router-dom";
import {goToPokedexPage} from '../../router/Coordinator'

export default function HomePage() {
    const history = useHistory()

    return (
        <div>
            <p>Lista de Pokemons</p>
            <button onClick={()=>goToPokedexPage(history)}>
                Ver Pokedex
            </button>
        </div>
    )
}
