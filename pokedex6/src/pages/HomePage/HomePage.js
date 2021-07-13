import React from 'react'
import { useHistory } from "react-router-dom";
import {goToPokedexPage} from '../../router/Coordinator';

import PokeCard from "../../components/PokeCard/PokeCard";
import {HomeFlexBox , Header} from "../styled/styled"

export default function HomePage() {
    const history = useHistory()

    return (
        <div>
            <Header>
                <button onClick={()=>goToPokedexPage(history)}>
                    Ver Pokedex
                </button>
                <h2>Lista de Pokemons</h2>
            </Header>
            <HomeFlexBox>
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
            </HomeFlexBox>
        </div>
    )
}
