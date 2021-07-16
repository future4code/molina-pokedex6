import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import {goToPokedexPage} from '../../router/Coordinator'
import PokeCard from '../../components/PokeCard/PokeCard';
import GlobalStateContext from '../../global/GlobalStateContext';

import {Header , HomeFlexBox} from '../styled/styled'
import PokeLogo from '../../assets/pokeball-logo.png'

export default function HomePage() {

  const history = useHistory();
  const {states} = useContext(GlobalStateContext)
    console.log(states)
  return(
    <div>
      <Header>

        <button 
          onClick={()=>goToPokedexPage(history)}
        >
          Ver pokedex
        </button>

        <h1>Lista de Pokemons</h1>
        <img src={PokeLogo} />

      </Header>
      
      <HomeFlexBox>
        {states.pokemonList && 
          states.pokemonList.map((pokemon) => {
            return (
              <PokeCard
                key={pokemon.name}
                pokemon={pokemon}
                isPokedex={false}
              />
            )
          })
        }                              
      </HomeFlexBox>
    </div>
  )
}