import { PokemonProps, usePokedex } from "../../hooks/usePokedex";

type Props = {
  pokemon: PokemonProps
}

export default function Pokemon({ pokemon: { avatarUrl, pokemonNumber, pokemonName }}: Props) {
  const { pokemon, loading } = usePokedex();
  return (
    <>
        <img className="pokemonImage" src={avatarUrl} alt="Pokemon" />
        <h1 className="pokemonData">
            <span className="pokemonNumber">{pokemonNumber}</span>
            <span className="pokemonName">{pokemonName}</span>
        </h1>
    </> 
  )
}
