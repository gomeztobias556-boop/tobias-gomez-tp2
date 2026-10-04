import { obtenerPokemon, obtenerListaPokemon } from "./services/pokemonService.js";
import {
    renderPokemon,
    renderPokemons,
    limpiarContenedor,
    mostrarSpinner,
    ocultarSpinner
} from "./components/pokemonUi.js";
import { mostrarError } from "./helpers/sweetAlert.js";


const pokemonInput = document.getElementById("pokemonInput");
const searchButton = document.getElementById("searchButton");
const resetButton = document.getElementById("resetButton");

const pokemonContainer = document.getElementById("pokemonContainer");
const loading = document.getElementById("loading");

// Buscar ind pokemon
const cargarPokemon = async (nombreOId) => {
    mostrarSpinner(loading);
    limpiarContenedor(pokemonContainer);

    try {
        const pokemon = await obtenerPokemon(nombreOId);

        renderPokemon(pokemon, pokemonContainer);

    } catch (error) {
        mostrarError(error.message);
    } finally {
        ocultarSpinner(loading);
    }
};

// Boton para buscar
const buscarPokemon = async () => {
    const valor = pokemonInput.value.trim();

    if (valor === "") {
        mostrarError("Debe ingresar un nombre o ID");
        return;
    }

    await cargarPokemon(valor);
};

// Eventos
searchButton.addEventListener("click", buscarPokemon);

pokemonInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        buscarPokemon();
    }
});

// Boton para volver
resetButton.addEventListener("click", () => {
    pokemonInput.value = "";
    cargarListaInicial();
});

const cargarListaInicial = async () => {
    mostrarSpinner(loading);
    limpiarContenedor(pokemonContainer);

    try {
        const pokemons = await obtenerListaPokemon();

        renderPokemons(pokemons, pokemonContainer);

    } catch (error) {
        mostrarError(error.message);
    } finally {
        ocultarSpinner(loading);
    }
};

cargarListaInicial();
