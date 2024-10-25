
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    pokemon.species = pokeDetail.species.name;
    pokemon.height = pokeDetail.height;
    pokemon.weight = pokeDetail.weight;
    
    const allAbilities = pokeDetail.abilities.map((abilitieSlot) => abilitieSlot.ability.name)
    const abilitiesWithSpace = allAbilities.join(', ');
    pokemon.abilities = abilitiesWithSpace
    pokemon.ability = allAbilities[0];

    pokemon.hp = pokeDetail.stats[0].base_stat;
    pokemon.attack = pokeDetail.stats[1].base_stat;
    pokemon.defense = pokeDetail.stats[2].base_stat;
    pokemon.spAtk = pokeDetail.stats[3].base_stat;
    pokemon.spDef = pokeDetail.stats[4].base_stat;
    pokemon.speed = pokeDetail.stats[5].base_stat;

    pokemon.total = pokeDetail.stats.reduce((acc, stat) => acc + stat.base_stat, 0);

    const moves = pokeDetail.moves.map((movesSlot) => movesSlot.move.name)
    const [move] = moves

    pokemon.moves = moves
    pokemon.move = move

    return pokemon
}

function convertPokeApiSpeciesToPokemon(pokeSpecies) {
    const pokemon = new Pokemon()

    const eggGroups = pokeSpecies.egg_groups.map((eggSlot) => eggSlot.name);
    const eggGroupsWithSpace = eggGroups.join(', ');
    const [eggGroup] = eggGroups

    pokemon.eggGroups = eggGroupsWithSpace;
    pokemon.eggGroup = eggGroup;
    pokemon.gender = pokeSpecies.gender_rate;
    pokemon.eggCycle = pokeSpecies.hatch_counter;

    return pokemon
}

pokeApi.searchEvolution = (id) => {
    const evolutionData = Evolution.findEvolutionById(id);
    return evolutionData;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
        .then((pokemon) => {
            return pokeApi.getPokemonEvolution(pokemon.number)
                .then((evolutionDetails) => {

                    pokemon.evolution = evolutionDetails.chain.evolves_to[0].species.name
                    return pokemon;
                });
        })
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}

pokeApi.getPokemonById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return fetch(url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
        .then((pokemonDetail) => pokemonDetail);
}

pokeApi.getPokemonSpecies = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;

    return fetch(url)
        .then((response) => response.json())
        .then(convertPokeApiSpeciesToPokemon)
};

pokeApi.getPokemonEvolution = (id) => {
    const url = `https://pokeapi.co/api/v2/evolution-chain/${id}/`;

    return fetch(url)
        .then((response) => response.json())
};

