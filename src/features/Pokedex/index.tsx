import Button from "../../components/Button";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import pokedex from "../../assets/pokedex.png";

import Pokemon from "./components/Pokemon";
import { usePokedex } from "./hooks/usePokedex";


import "./styles.css"

export default function Pokedex() {
    const { 
        loading,
        pokemon,
        inputValue,
        handleSubmitForm,
        handleChangeInput, 
        handleClickPrev, 
        handleClickNext
    } = usePokedex();

    return (
        <>
            <img className="pokedex" src={pokedex} alt="Pokedex" />

            {loading && ( <Loading className="pokemonImage"/> )}
            {(!loading && pokemon) && ( <Pokemon pokemon={pokemon} /> )}
            <form className="form" onSubmit={handleSubmitForm}>
                <Input 
                    type="search" 
                    placeholder="Name or Number"
                    value={inputValue}
                    onChange={handleChangeInput}
                    required
                />
            </form>
            <div className="buttons">
                <Button id="prev" onClick={handleClickPrev} disabled={loading}>prev</Button>
                <Button id="next" onClick={handleClickNext} disabled={loading}>next</Button>
            </div>
        </>
    )
}
