import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "../global/GlobalStateContext";
import { baseURL } from "../constants/urls";

const GlobalState = (props) => {
  const [pokemonList, setPokemonList] = useState([]);

  const [pokedex, setPokedex] = useState([]);

  //pega a lista de  pokemons da pokeAPI
  const getPokemonList = () => {
    axios
      .get(baseURL)
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  const states = { pokemonList, pokedex };
  const setters = { setPokemonList, setPokedex };
  const requests = { getPokemonList };


  const data = { states, setters, requests };
 
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
