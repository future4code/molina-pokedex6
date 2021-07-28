import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { goToDetailsPage } from "../../router/Coordinator";
import axios from "axios";
import GlobalStateContext from "../../global/GlobalStateContext";

import Pokebola from "../../assets/Pokeball.png";

import { DetailsBtnContainer, PokeCardContainer } from "../Styled/styled";

export default function Card(props) {
  const history = useHistory();

  const [photo, setPhoto] = useState([]);
  const { states, setters } = useContext(GlobalStateContext);

  const pokemonPhoto = () => {
    axios
      .get(props.pokemon.url)
      .then((response) => {
        setPhoto(response.data.sprites.front_default);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    pokemonPhoto();
  }, []);

  const addToPokedex = () => {
    const pokeIndex = states.pokemonList.findIndex(
      (item) => item.name === props.pokemon.name
    );
    const newPokemonList = [...states.pokemonList];
    newPokemonList.splice(pokeIndex, 1);

    const newPokedexList = [...states.pokedex, props.pokemon];
    const orderedList = newPokedexList.sort((a, b) => {
      return (
        Number(a.url.slice(34, a.url.length - 1)) -
        Number(b.url.slice(34, b.url.length - 1))
      );
    });

    setters.setPokedex(orderedList);
    alert(`O Pokemon ${props.pokemon.name} foi Adicionado à Pokedex! ✅ `);
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
      return (
        Number(a.url.slice(34, a.url.length - 1)) -
        Number(b.url.slice(34, b.url.length - 1))
      );
    });

    setters.setPokedex(newPokedexList);
    alert(`O Pokemon ${props.pokemon.name} foi Removido à Pokedex! ❌ `)
    setters.setPokemonList(orderedList);
  };

  return (
    <PokeCardContainer>
      <img src={photo} alt={props.pokemon.name} />
      <p>
        <img src={Pokebola} />
        {props.pokemon.name}
      </p>
      <DetailsBtnContainer>
        <button onClick={props.isPokedex ? removeFromPokedex : addToPokedex}>
          {props.isPokedex ? "Remover" : "Adicionar"}
        </button>

        <button onClick={() => goToDetailsPage(history, props.pokemon.name)}>
          Ver detalhes
        </button>
      </DetailsBtnContainer>
    </PokeCardContainer>
  );
}
