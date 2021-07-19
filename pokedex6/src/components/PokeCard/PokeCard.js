import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { goToDetailsPage } from "../../router/Coordinator";
import axios from "axios";
import GlobalStateContext from "../../global/GlobalStateContext";

import Pokebola from '../../assets/Pokeball.png'

import { DetailsBtnContainer, PokeCardContainer } from "../Styled/styled";

export default function Card( props ) {

  const history = useHistory();

  const { states, setters } = useContext(GlobalStateContext);

  const addToPokedex = () => {
    const pokeIndex = states.pokemonList.findIndex(
      (item) => item.name === props.pokemon.name
    );
    const newPokemonList = [...states.pokemonList];
    newPokemonList.splice(pokeIndex, 1);

    const newPokedexList = [...states.pokedex, props.pokemon];
    const orderedList = newPokedexList.sort((a, b) => {
/*       return (
        Number(a.id(a.url.length - 1)) -
        Number(b.id.slice( b.id.length - 1))
      );  */
    });

    setters.setPokedex(orderedList);
    alert (`Adicionado à Pokedex`)
    setters.setPokemonList(newPokemonList);
  };

  const removeFromPokedex = () => {
    const pokeIndex = states.pokedex.findIndex(
      (item) => item.name === props.pokemon.name
    );
    const newPokedexList = [...states.pokedex];
    newPokedexList.splice(pokeIndex, 1);

    const newPokemonList = [...states.pokemonList, props.pokemon];
    const orderedList = newPokemonList.sort((a, b) => {
/*       return (
        Number(a.url(a.url.length - 1)) -
        Number(b.url(b.url.length - 1))
      ); */
    });

    setters.setPokedex(newPokedexList);
    setters.setPokemonList(orderedList);
  };

   return (
    <PokeCardContainer>  
      <img src={props.pokemon.sprites.front_default} alt="" />
      <p>
        <img src={Pokebola} />
        {props.pokemon.name}
      </p>
      <DetailsBtnContainer>
        <button 
          onClick={props.isPokedex ? removeFromPokedex : addToPokedex}
        >
          {props.isPokedex ? "Remover" : "Adicionar"}
        </button>

        <button
          onClick={() => goToDetailsPage(history, props.pokemon.name)}
        >
          Ver detalhes
        </button>
      </DetailsBtnContainer>
    </PokeCardContainer>
  )
}