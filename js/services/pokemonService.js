const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const obtenerPokemon = async (pokemon) => {
    try {
        const respuesta = await fetch(`${BASE_URL}/${pokemon}`);

        if (!respuesta.ok) {
            throw new Error("El Pokémon solicitado no existe");
        }

        const datos = await respuesta.json();

        return datos;

    } catch (error) {
        console.error("Error al obtener el Pokémon:", error);
        throw error;
    }
};

export const obtenerListaPokemon = async (cantidad = 12) => {
    try {
        const respuesta = await fetch(`${BASE_URL}?limit=${cantidad}`);

        if (!respuesta.ok) {
            throw new Error("No se pudo cargar la lista de Pokémon");
        }

        const datos = await respuesta.json();

        const pokemons = await Promise.all(
            datos.results.map(pokemon => obtenerPokemon(pokemon.name))
        );

        return pokemons;

    } catch (error) {
        console.error("Error al obtener la lista de Pokémon:", error);
        throw error;
    }
};