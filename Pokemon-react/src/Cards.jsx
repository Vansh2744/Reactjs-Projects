
export const Cards = ({ pokemonData }) => {
  const handleAudio = () => {
    var audio = new Audio(pokemonData.cries.latest);
    audio.play();
  };

  return (
    <>
      <li>
        <figure>
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt=""
          />
        </figure>
        <h2>{pokemonData.name}</h2>
        <section>
          <p>
            Abilities:{" "}
            {pokemonData.abilities.map((res) => res.ability.name).join(", ")}
          </p>
          <p>
            Types: {pokemonData.types.map((res) => res.type.name).join(", ")}
          </p>
          <p>Height: {pokemonData.height}</p>
        </section>
        <button onClick={handleAudio} className="shout">shout</button>
      </li>
    </>
  );
};
