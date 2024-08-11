import { useEffect, useState } from "react";
import { Cards } from "./Cards";

export const PokemonCards = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=100";
  const PokemonAPI = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const pokemonData = data.results.map(async (currData) => {
        const mainRes = await fetch(currData.url);
        const mainData = await mainRes.json();
        return mainData;
      });
      const allPokemon = await Promise.all(pokemonData);
      setPokemon(allPokemon);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err);
    }
  };
  useEffect(() => {
    PokemonAPI();
  }, []);

  const searchData = pokemon.filter((res) => res.name.toLowerCase().includes(input.toLowerCase()));
  console.log(searchData);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if(error){
    return(
      <h1>{error.message}</h1>
    )
  }

  return (
    <>
      <div className="container">
        <h1>Pokémon Cards</h1>
        <input type="text" name="name" id="name" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Search for pokemon"/>
        <ul>
          {searchData.map((currPokemon) => {
            return <Cards key={currPokemon.id} pokemonData={currPokemon}/>;
          })}
        </ul>
      </div>
    </>
  );
};
