export const renderPokemon = (pokemon, contenedor) => {
    contenedor.innerHTML = `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm">

                <img
                    src="${pokemon.sprites.other["official-artwork"].front_default}"
                    class="card-img-top p-3"
                    alt="${pokemon.name}"
                >

                <div class="card-body text-center">

                    <h2 class="card-title text-capitalize">
                        ${pokemon.name}
                    </h2>

                    <p class="card-text">
                        <strong>ID:</strong> #${pokemon.id}
                    </p>

                    <p class="card-text">
                        <strong>Altura:</strong> ${pokemon.height / 10} m
                    </p>

                    <p class="card-text">
                        <strong>Peso:</strong> ${pokemon.weight / 10} kg
                    </p>

                    <p class="card-text">
                        <strong>Tipo:</strong>
                        ${pokemon.types
                            .map(tipo => tipo.type.name)
                            .join(", ")}
                    </p>

                </div>

            </div>
        </div>
    `;
};


export const renderPokemons = (pokemons, contenedor) => {
    contenedor.innerHTML = pokemons.map(pokemon => `
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div class="card h-100 shadow-sm">

                <img
                    src="${pokemon.sprites.other["official-artwork"].front_default}"
                    class="card-img-top p-3"
                    alt="${pokemon.name}"
                >

                <div class="card-body text-center">

                    <h3 class="card-title text-capitalize">
                        ${pokemon.name}
                    </h3>

                    <p class="card-text">
                        <strong>ID:</strong> #${pokemon.id}
                    </p>

                    <p class="card-text">
                        <strong>Tipo:</strong>
                        ${pokemon.types
                            .map(tipo => tipo.type.name)
                            .join(", ")}
                    </p>

                </div>

            </div>
        </div>
    `).join("");
};


export const limpiarContenedor = (contenedor) => {
    contenedor.innerHTML = "";
};


export const mostrarSpinner = (spinner) => {
    spinner.classList.remove("d-none");
};


export const ocultarSpinner = (spinner) => {
    spinner.classList.add("d-none");
};