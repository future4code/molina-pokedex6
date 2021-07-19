import React, { useContext , useState , useEffect } from 'react'
import { useHistory } from "react-router-dom";
import {goToPokedexPage} from '../../router/Coordinator'
import Card from '../../components/PokeCard/PokeCard';
import GlobalStateContext from '../../global/GlobalStateContext';
import {baseURL} from '../../constants/urls'
import { getPokemon, getAllPokemon } from "../../services/pokemon";

import {Header , HomeFlexBox , ContainerHomePage , ButtonPaginacao} from '../styled/styled'
import PokeLogo from '../../assets/Pokeball.png'

export default function HomePage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialURL = baseURL;

  const history = useHistory();
  const {states } = useContext(GlobalStateContext)

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
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
      <ContainerHomePage>
                <ButtonPaginacao>
                  <h4> Páginas: </h4> 
                    <button onClick={prev}>Anterior</button>
                    <button onClick={next}>Próximo</button>
                  
                </ButtonPaginacao>
        <HomeFlexBox>
          {pokemonData &&
            pokemonData.map((pokemon) => {
              return (
                <Card
                key={pokemon.name}
                  pokemon={pokemon}
                  isPokedex={false}
                  />
              )
            })
          }
        </HomeFlexBox>
      </ContainerHomePage>
    </div>
  );
}
