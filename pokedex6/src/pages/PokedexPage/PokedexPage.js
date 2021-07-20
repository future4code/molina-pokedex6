import React, {useContext} from 'react';
import { useHistory } from "react-router-dom";
import { goToHomePage } from '../../router/Coordinator';
import Card from '../../components/PokeCard/PokeCard'
import GlobalStateContext from '../../global/GlobalStateContext';
import Pikachu from '../../assets/png-pokemon.png'

import {Header , HomeFlexBox , PokedexVazia} from '../styled/styled'
import PokeLogo from '../../assets/Pokeball.png'

export default function PokeDexPage() {

    const history = useHistory();
    const {states} = useContext(GlobalStateContext)

    return(
        <div>
            <Header>
                <button onClick={()=>goToHomePage(history)} >
                    Lista de Pokemons
                </button>
                <h1>PokeDex</h1>
                <img src={PokeLogo} />
            </Header>
            <HomeFlexBox>
            {states.pokedex.length > 0 ?
            states.pokedex.map((pokemon) => {
                return (
                    <li key={pokemon.id}>
                        <Card
                            nome={pokemon.name}
                            pokemon={pokemon}
                            isPokedex={true}
                        />
                    </li> 
                )
            })
            : <PokedexVazia>
                <h1>Nenhum Pokemon na Pokedex!</h1>
                <iframe src="https://giphy.com/embed/iBANmdIlMNJVC" 
                    width="480" height="179" frameBorder="0" class="giphy-embed" allowFullScreen>
                </iframe>
              </PokedexVazia> 
            }
            </HomeFlexBox>
            </div>
            )
            }
                {/* <GifPikachu> */}
{/*                 <div style="width:100%;height:0;padding-bottom:75%;position:relative;">
                    <iframe src="https://giphy.com/embed/slVWEctHZKvWU" 
                        width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen>
                    </iframe>
                </div>
                    <p>
                        <a href="https://giphy.com/gifs/pokemon-pikachu-slVWEctHZKvWU">
                            via GIPHY
                        </a>
                    </p>
                </GifPikachu> */}
