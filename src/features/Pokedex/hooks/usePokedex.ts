import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { getPokemon } from "../services/pokemon";

export type PokemonProps = {
    avatarUrl: string,
    pokemonNumber: number,
    pokemonName: string,
}

export function usePokedex() {
    const [inputValue, setInputValue] = useState("");
    const [pokemon, setPokemon] = useState<PokemonProps | undefined>();
    const [loading, setLoading] = useState(true);
    
    const id = useMemo(() => pokemon ? pokemon.pokemonNumber : 1, [pokemon])

    const handleClickPrev = () => 
        fetchPokemon(String(id - 1))
        
    const handleClickNext = () => 
        fetchPokemon(String(id + 1))

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => 
        setInputValue(event.target.value)

    const handleSubmitForm = (event: FormEvent) => {
        event.preventDefault();
        fetchPokemon(inputValue.toLocaleLowerCase())
        setInputValue("");
    }

    const fetchPokemon = ( pokemon: string) => {
        setLoading(true);
        getPokemon(pokemon).then(({data, error}) => { 
            if(error) return;
            setPokemon({
                avatarUrl: data!.sprites.versions["generation-v"]["black-white"].animated.front_default,
                pokemonNumber: data!.id,
                pokemonName: data!.name,
            })
        })
        setLoading(false);
    }

    useEffect(() => {
        fetchPokemon(String(id))
    }, [id])

    return {
        handleClickPrev,
        handleClickNext,
        handleChangeInput,
        handleSubmitForm,
        inputValue,
        loading,
        pokemon
    }
}