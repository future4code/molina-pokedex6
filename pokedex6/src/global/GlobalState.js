import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";
import { baseURL } from "../constants/urls";
import Pagination from '../pages/Pagination/Pagination'

const LIMIT = 12

const GlobalState = (props) => {

  const [pokemonList, setPokemonList] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [offset, setOffset] = useState(0)

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
      {pokemonList.count && (
        <Pagination 
        limit={LIMIT} 
        total={pokemonList.count}
        offset={offset}
        setOffset={setOffset}/>
      )}
    </GlobalStateContext.Provider>

  );
};

export default GlobalState;