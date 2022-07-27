import axios, { AxiosError } from "axios";
import { request } from "../../../lib/fetch";

interface PokeAPI {
    id: number;
    name: string;
    sprites: {
        versions: {
            "generation-v": {
                "black-white": {
                    animated: {
                        front_default: string
                    }
                }
            }
        }
    }
}

export async function getPokemon(numberOrName: string) {
    let data: PokeAPI | undefined, error: String | undefined;
    await request.get<PokeAPI>(`/pokemon/${numberOrName}`).then((response) => {
        data = response.data;
    }).catch((err) => {
        if (!axios.isAxiosError(err)) {
            error = "Erro não identificado"
            return;
        }
        error = String(err.response?.data);
    });
    return { data, error };
}