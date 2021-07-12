import React from 'react';
import { useHistory } from "react-router-dom";
import {goToHomePage, goToDetailsPage} from '../../router/Coordinator';

export default function PokeDexPage() {
    const history = useHistory();

    return(
        <div>
            <p>Pokedex</p>
            <button onClick={()=>goToHomePage(history)} >
                Lista de Pokemons
            </button>
            <button onClick={()=>goToDetailsPage(history)} >
                Detalhes do Pokemon 
            </button>
        </div>
    )
}
