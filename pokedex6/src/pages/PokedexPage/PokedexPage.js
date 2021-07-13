import React from 'react';
import { useHistory } from "react-router-dom";
import {goToHomePage, goToDetailsPage} from '../../router/Coordinator';
import PokeCard from '../../components/PokeCard/PokeCard'

import {Header , HomeFlexBox} from '../styled/styled'

export default function PokeDexPage() {
    const history = useHistory();

    return(
        <div>
            <Header>
            <button onClick={()=>goToHomePage(history)} >
                Lista de Pokemons
            </button>
            <h2>PokeDex</h2>
            </Header>
            <HomeFlexBox>
                <PokeCard />
                <PokeCard />
                <PokeCard />
            </HomeFlexBox>
        </div>
    )
}
