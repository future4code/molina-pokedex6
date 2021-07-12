import React from 'react'
import {useHistory} from "react-router-dom";
import {goToHomePage} from '../../router/Coordinator'

export default function DetailsPage() {
    const history = useHistory();

    return(
        <div>
            <p>Detalhes do Pokemon</p>
            <button onClick={()=>goToHomePage(history)}> 
                Lista de Pokemons
            </button>
        </div>
    )
}