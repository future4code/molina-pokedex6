import React, {useContext} from 'react';
import { useHistory } from "react-router-dom";
import { goToHomePage } from '../../router/Coordinator';
import PokeCard from '../../components/PokeCard/PokeCard'
import GlobalStateContext from '../../global/GlobalStateContext';

import {Header , HomeFlexBox} from '../styled/styled'
import PokeLogo from '../../assets/pokeball-logo.png'

export default function PokeDexPage() {
    const history = useHistory();

    const {states} = useContext(GlobalStateContext)

    return(
        <div>
            <Header>
            <button onClick={()=>goToHomePage(history)} >
                Lista de Pokemons
            </button>
            <h2>PokeDex</h2>
            <img src={PokeLogo} />
            </Header>
            <HomeFlexBox>
            {states.pokedex && 
                states.pokedex.map((pokemon) => {
                    return (
                    <PokeCard
                        key={pokemon.name}
                        pokemon={pokemon}
                        isPokedex={true}
                    />)
                })
            }
            </HomeFlexBox>
        </div>
    )
}
