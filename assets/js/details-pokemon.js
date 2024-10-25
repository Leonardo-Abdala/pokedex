

// Seções para controlar a exibição
const sectionAbout = document.querySelector('#section-about');
const sectionBaseStats = document.querySelector('#section-base-stats');
const sectionEvolution = document.querySelector('#section-evolution');
const sectionMoves = document.querySelector('#section-moves');

// ID do pokemon
const urlIdPokemon = new URLSearchParams(window.location.search).get('pok');

// Preencher valores básicos do pokemon
function insertValuesBasicDetails(id){

    const namePokemonElement = document.querySelector('#name');
    const numberPokemonElement = document.querySelector('#number');
    const type1PokemonElement = document.querySelector('#type1');
    const type2PokemonElement = document.querySelector('#type2');
    const imagePokemonElement = document.querySelector('#image-pokemon');
    const sectionGlobalElement = document.querySelector('.content-details-pokemon');

    pokeApi.getPokemonById(id)  
    .then((pokemon) => {
        
        namePokemonElement.innerHTML = pokemon.name;
        numberPokemonElement.innerHTML = "#" + pokemon.number;

        
        type1PokemonElement.innerHTML = pokemon.types[0];
        type1PokemonElement.classList.add(`${pokemon.types[0]}`);

        if(pokemon.types[1] != undefined){
            type2PokemonElement.innerHTML = pokemon.types[1];
            type2PokemonElement.classList.add(`${pokemon.types[1]}`);
        }else{
            type2PokemonElement.classList.add('hidden');
        }

        imagePokemonElement.src = pokemon.photo;
        imagePokemonElement.alt = pokemon.name;

        sectionGlobalElement.classList.add(`${pokemon.types[0]}`);
    });
}

// Preencher valores do pokemon
function insertValuesAboutDetails(id){

    const speciesPokemonElement = document.querySelector('#species-value');
    const heightPokemonElement = document.querySelector('#height-value');
    const weightPokemonElement = document.querySelector('#weight-value');
    const abilitiesPokemonElement = document.querySelector('#abilities-value');
    const genderPokemonElement = document.querySelector('#gender-value');
    const eggGroupsPokemonElement = document.querySelector('#egg-groups-value');
    const eggCyclePokemonElement = document.querySelector('#egg-cycle-value');

    pokeApi.getPokemonById(id)  
    .then((pokemon) => {
        
        speciesPokemonElement.innerHTML = pokemon.species;
        heightPokemonElement.innerHTML = (pokemon.height/10) + " cm";
        weightPokemonElement.innerHTML = (pokemon.weight/10) + " kg";
        abilitiesPokemonElement.innerHTML = pokemon.abilities;
    });

    pokeApi.getPokemonSpecies(id)
    .then((pokemon) => {
        
        const male = ((8 - pokemon.gender) / 8)*100 + "%";
        const female = (pokemon.gender / 8)*100 + "%";
        if(pokemon.gender === 1){
            
        }

        genderPokemonElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male gender-male" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/>
                                            </svg> 
                                            <span>${male}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-female gender-female" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5"/>
                                            </svg>
                                            <span>${female}</span>`;

        eggGroupsPokemonElement.innerHTML = pokemon.eggGroups;
        eggCyclePokemonElement.innerHTML = pokemon.eggCycle;
    });
}

// Preencher valores do pokemon
function insertValuesBaseStatsDetails(id){

    const hpPokemonElement = document.querySelector('#hp-value');
    const hpBarPokemonElement = document.querySelector('#hp-value-bar');

    const attackPokemonElement = document.querySelector('#attack-value');
    const attackBarPokemonElement = document.querySelector('#attack-value-bar');

    const defensePokemonElement = document.querySelector('#defense-value');
    const defenseBarPokemonElement = document.querySelector('#defense-value-bar');

    const spAtkPokemonElement = document.querySelector('#sp-atk-value');
    const spAtkBarPokemonElement = document.querySelector('#sp-atk-value-bar');

    const spDefPokemonElement = document.querySelector('#sp-def-value');
    const spDefBarPokemonElement = document.querySelector('#sp-def-value-bar');

    const speedPokemonElement = document.querySelector('#speed-value');
    const speedBarPokemonElement = document.querySelector('#speed-value-bar');

    const totalPokemonElement = document.querySelector('#total-value');
    const totalBarPokemonElement = document.querySelector('#total-value-bar');


    pokeApi.getPokemonById(id)  
        .then((pokemon) => {
            
            hpPokemonElement.innerHTML = pokemon.hp;
            attackPokemonElement.innerHTML = pokemon.attack;
            defensePokemonElement.innerHTML = pokemon.defense;
            spAtkPokemonElement.innerHTML = pokemon.spAtk;
            spDefPokemonElement.innerHTML = pokemon.spDef;
            speedPokemonElement.innerHTML = pokemon.speed;
            totalPokemonElement.innerHTML = pokemon.total;

            hpBarPokemonElement.style.width = pokemon.hp + "%";
            attackBarPokemonElement.style.width = pokemon.attack + "%";
            defenseBarPokemonElement.style.width = pokemon.defense + "%";
            spAtkBarPokemonElement.style.width = pokemon.spAtk + "%";
            spDefBarPokemonElement.style.width = pokemon.spDef + "%";
            speedBarPokemonElement.style.width = pokemon.speed + "%";
            totalBarPokemonElement.style.width = "100%";
        });
}

// Preencher valores do pokemon
function insertValuesAEvolutionDetails(id){

   const evolutionPokemon = pokeApi.searchEvolution(Number(id));

   const namePokemonElement = document.querySelector('#evolution-name');
   const levelPokemonElement = document.querySelector('#evolution-level');
   const imagePokemonElement = document.querySelector('#evolution-image');

   namePokemonElement.innerHTML = evolutionPokemon.evolution;
   levelPokemonElement.innerHTML = "Min level: " + evolutionPokemon.level_evolution;
   imagePokemonElement.src = evolutionPokemon.url;
   imagePokemonElement.alt = evolutionPokemon.evolution;
    
}

// Preencher valores do pokemon
function insertValuesAMovesDetails(id) {
    const movesPokemonElement = document.querySelector('.section-moves-box');
    const colors = ["#a6a877", "#77c850", "#ee7f30", "#678fee", "#f7cf2e", "#98d5d7", "#dfbf69", "#a98ff0", "#a040a0", "#bf3029", "#f65687", "#725847", "#b8a137", "#a8b720", "#6e5896", "#b9b7cf", "#6f38f6", "#f9aec7"];
    
    pokeApi.getPokemonById(id)
        .then((pokemon) => {
            movesPokemonElement.innerHTML = pokemon.moves.map((move) => {
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                return `<span class="move-box tooltiptext" style="background-color: ${randomColor};">${move}</span>`;
            }).join('');
        });
}


function clearSections(sectionAbout, sectionBaseStats, sectionEvolution, sectionMoves){
    sectionAbout.classList.remove('active');
    sectionBaseStats.classList.remove('active');
    sectionEvolution.classList.remove('active');
    sectionMoves.classList.remove('active');
}

sectionAbout.addEventListener('click', () => {

    clearSections(sectionAbout, sectionBaseStats, sectionEvolution, sectionMoves);

    for (let i = 1; i < 5; i++) {
        const section = document.querySelector('#section-' + i);

        if(i === 1){
            section.classList.remove('hidden');
            section.classList.add('show');
        }else{
            section.classList.remove('show');
            section.classList.add('hidden');
            sectionAbout.classList.add('active');
        }
        
    }
})

sectionBaseStats.addEventListener('click', () => {

    clearSections(sectionAbout, sectionBaseStats, sectionEvolution, sectionMoves);

    for (let i = 1; i < 5; i++) {
        const section = document.querySelector('#section-' + i);

        if(i === 2){
            section.classList.remove('hidden');
            section.classList.add('show');
        }else{
            section.classList.remove('show');
            section.classList.add('hidden');
            sectionBaseStats.classList.add('active');
        }
        
    }
})

sectionEvolution.addEventListener('click', () => {

    clearSections(sectionAbout, sectionBaseStats, sectionEvolution, sectionMoves);

    for (let i = 1; i < 5; i++) {
        const section = document.querySelector('#section-' + i);

        if(i === 3){
            section.classList.remove('hidden');
            section.classList.add('show');
        }else{
            section.classList.remove('show');
            section.classList.add('hidden');
            sectionEvolution.classList.add('active');
        }
        
    }
})

sectionMoves.addEventListener('click', () => {

    clearSections(sectionAbout, sectionBaseStats, sectionEvolution, sectionMoves);

    for (let i = 1; i < 5; i++) {
        const section = document.querySelector('#section-' + i);

        if(i === 4){
            section.classList.remove('hidden');
            section.classList.add('show');
        }else{
            section.classList.remove('show');
            section.classList.add('hidden');
            sectionMoves.classList.add('active');
        }
        
    }
})

insertValuesBasicDetails(urlIdPokemon);
insertValuesAboutDetails(urlIdPokemon);
insertValuesBaseStatsDetails(urlIdPokemon);
insertValuesAEvolutionDetails(urlIdPokemon);
insertValuesAMovesDetails(urlIdPokemon);
