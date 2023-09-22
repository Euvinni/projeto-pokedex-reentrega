import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    try {
      const pokemonPoints = [];
      for (let i = 152; i <= 202; i++) {
        pokemonPoints.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
      }
      const response = await axios.all(pokemonPoints);
      const fetchedPokemons = response.map((response) => response.data);
      setPokemons(fetchedPokemons);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPokemons();
  }, []);


  return (
    <PokemonContext.Provider value={{ pokemons, getPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};