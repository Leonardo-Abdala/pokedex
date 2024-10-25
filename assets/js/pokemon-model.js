class Pokemon {
    number;
    name;
    type;
    types = [];
    photo;
    species;
    height;
    weight;
    ability;
    abilities = [];
    gender;
    eggGroup;
    eggGroups = [];
    eggCycle;
    hp;
    attack;
    defense;
    spAtk;
    spDef;
    speed;
    total;
    move;
    moves = [];
    evolution;
}

class Evolution {

    static findEvolutionById(id) {
        const evolution = Evolution.evolutions.find(evo => evo.id === id);
        return evolution ? evolution : 'Evolução não encontrada';
    }

    static evolutions = [{
            "id": 1,
            "evolution": "Ivysaur",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
            "level_evolution": 16
        },
        {
            "id": 2,
            "evolution": "Venusaur",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
            "level_evolution": 32
        },
        {
            "id": 4,
            "evolution": "Charmeleon",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
            "level_evolution": 16
        },
        {
            "id": 5,
            "evolution": "Charizard",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
            "level_evolution": 36
        },
        {
            "id": 7,
            "evolution": "Wartortle",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
            "level_evolution": 16
        },
        {
            "id": 8,
            "evolution": "Blastoise",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
            "level_evolution": 36
        },
        {
            "id": 10,
            "evolution": "Metapod",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
            "level_evolution": 7
        },
        {
            "id": 11,
            "evolution": "Butterfree",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
            "level_evolution": 10
        },
        {
            "id": 12,
            "evolution": "Kakuna",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
            "level_evolution": 7
        },
        {
            "id": 14,
            "evolution": "Beedrill",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
            "level_evolution": 10
        },
        {
            "id": 16,
            "evolution": "Pidgeotto",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
            "level_evolution": 18
        },
        {
            "id": 17,
            "evolution": "Pidgeot",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg",
            "level_evolution": 36
        },
        {
            "id": 19,
            "evolution": "Raticate",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg",
            "level_evolution": 20
        },
        {
            "id": 21,
            "evolution": "Fearow",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg",
            "level_evolution": 20
        },
        {
            "id": 23,
            "evolution": "Arbok",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg",
            "level_evolution": 22
        },
        {
            "id": 25,
            "evolution": "Raichu",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg",
            "level_evolution": "Use Thunder Stone"
        },
        {
            "id": 27,
            "evolution": "Sandslash",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/28.svg",
            "level_evolution": 22
        },
        {
            "id": 29,
            "evolution": "Nidorina",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/30.svg",
            "level_evolution": 16
        },
        {
            "id": 30,
            "evolution": "Nidoqueen",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg",
            "level_evolution": "Use Moon Stone"
        },
        {
            "id": 32,
            "evolution": "Nidorino",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/33.svg",
            "level_evolution": 16
        },
        {
            "id": 33,
            "evolution": "Nidoking",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/34.svg",
            "level_evolution": "Use Moon Stone"
        },
        {
            "id": 35,
            "evolution": "Clefable",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/36.svg",
            "level_evolution": "Use Moon Stone"
        },
        {
            "id": 37,
            "evolution": "Ninetales",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/38.svg",
            "level_evolution": "Use Fire Stone"
        },
        {
            "id": 39,
            "evolution": "Wigglytuff",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg",
            "level_evolution": "Use Moon Stone"
        },
        {
            "id": 41,
            "evolution": "Golbat",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/42.svg",
            "level_evolution": 22
        },
        {
            "id": 43,
            "evolution": "Gloom",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/44.svg",
            "level_evolution": 21
        },
        {
            "id": 44,
            "evolution": "Vileplume",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/45.svg",
            "level_evolution": "Use Leaf Stone"
        },
        {
            "id": 46,
            "evolution": "Parasect",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/47.svg",
            "level_evolution": 24
        },
        {
            "id": 48,
            "evolution": "Venomoth",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/49.svg",
            "level_evolution": 31
        },
        {
            "id": 50,
            "evolution": "Dugtrio",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/51.svg",
            "level_evolution": 26
        },
        {
            "id": 52,
            "evolution": "Persian",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/53.svg",
            "level_evolution": 28
        },
        {
            "id": 54,
            "evolution": "Golduck",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/55.svg",
            "level_evolution": 33
        },
        {
            "id": 56,
            "evolution": "Primeape",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/57.svg",
            "level_evolution": 28
        },
        {
            "id": 58,
            "evolution": "Arcanine",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/59.svg",
            "level_evolution": "Use Fire Stone"
        },
        {
            "id": 60,
            "evolution": "Poliwhirl",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/61.svg",
            "level_evolution": 25
        },
        {
            "id": 61,
            "evolution": "Poliwrath",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/62.svg",
            "level_evolution": "Use Water Stone"
        },
        {
            "id": 63,
            "evolution": "Kadabra",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/64.svg",
            "level_evolution": 16
        },
        {
            "id": 64,
            "evolution": "Alakazam",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/65.svg",
            "level_evolution": "Trade"
        },
        {
            "id": 66,
            "evolution": "Machoke",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/67.svg",
            "level_evolution": 28
        },
        {
            "id": 67,
            "evolution": "Machamp",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/68.svg",
            "level_evolution": "Trade"
        },
        {
            "id": 69,
            "evolution": "Weepinbell",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/70.svg",
            "level_evolution": 21
        },
        {
            "id": 70,
            "evolution": "Victreebel",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/71.svg",
            "level_evolution": "Use Leaf Stone"
        },
        {
            "id": 72,
            "evolution": "Tentacruel",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/73.svg",
            "level_evolution": 30
        },
        {
            "id": 74,
            "evolution": "Graveler",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/75.svg",
            "level_evolution": 25
        },
        {
            "id": 75,
            "evolution": "Golem",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/76.svg",
            "level_evolution": "Trade"
        },
        {
            "id": 77,
            "evolution": "Rapidash",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/78.svg",
            "level_evolution": 40
        },
        {
            "id": 79,
            "evolution": "Slowbro",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg",
            "level_evolution": 37
        },
        {
            "id": 81,
            "evolution": "Magneton",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/82.svg",
            "level_evolution": 30
        },
        {
            "id": 83,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/83.svg",
            "level_evolution": null
        },
        {
            "id": 84,
            "evolution": "Dodrio",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/85.svg",
            "level_evolution": 31
        },
        {
            "id": 86,
            "evolution": "Dewgong",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/87.svg",
            "level_evolution": 34
        },
        {
            "id": 88,
            "evolution": "Muk",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/89.svg",
            "level_evolution": 38
        },
        {
            "id": 90,
            "evolution": "Cloyster",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/91.svg",
            "level_evolution": "Use Water Stone"
        },
        {
            "id": 92,
            "evolution": "Haunter",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/93.svg",
            "level_evolution": 25
        },
        {
            "id": 93,
            "evolution": "Gengar",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/94.svg",
            "level_evolution": "Trade"
        },
        {
            "id": 96,
            "evolution": "Hypno",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/97.svg",
            "level_evolution": 26
        },
        {
            "id": 98,
            "evolution": "Kingler",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/99.svg",
            "level_evolution": 28
        },
        {
            "id": 100,
            "evolution": "Electrode",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/101.svg",
            "level_evolution": 30
        },
        {
            "id": 102,
            "evolution": "Exeggutor",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/103.svg",
            "level_evolution": "Use Leaf Stone"
        },
        {
            "id": 104,
            "evolution": "Marowak",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/105.svg",
            "level_evolution": 28
        },
        {
            "id": 108,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/108.svg",
            "level_evolution": null
        },
        {
            "id": 109,
            "evolution": "Weezing",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/110.svg",
            "level_evolution": 35
        },
        {
            "id": 111,
            "evolution": "Rhydon",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/112.svg",
            "level_evolution": 42
        },
        {
            "id": 113,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/113.svg",
            "level_evolution": null
        },
        {
            "id": 114,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/114.svg",
            "level_evolution": null
        },
        {
            "id": 115,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/115.svg",
            "level_evolution": null
        },
        {
            "id": 116,
            "evolution": "Seadra",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/117.svg",
            "level_evolution": 32
        },
        {
            "id": 118,
            "evolution": "Seaking",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/119.svg",
            "level_evolution": 33
        },
        {
            "id": 120,
            "evolution": "Starmie",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/121.svg",
            "level_evolution": "Use Water Stone"
        },
        {
            "id": 123,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/123.svg",
            "level_evolution": null
        },
        {
            "id": 124,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/124.svg",
            "level_evolution": null
        },
        {
            "id": 125,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/125.svg",
            "level_evolution": null
        },
        {
            "id": 126,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/126.svg",
            "level_evolution": null
        },
        {
            "id": 127,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/127.svg",
            "level_evolution": null
        },
        {
            "id": 128,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/128.svg",
            "level_evolution": null
        },
        {
            "id": 129,
            "evolution": "Gyarados",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/130.svg",
            "level_evolution": 20
        },
        {
            "id": 131,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/131.svg",
            "level_evolution": null
        },
        {
            "id": 133,
            "evolution": "Flareon",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/136.svg",
            "level_evolution": "Use Fire Stone"
        },
        {
            "id": 137,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/137.svg",
            "level_evolution": null
        },
        {
            "id": 138,
            "evolution": "Omastar",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/139.svg",
            "level_evolution": 40
        },
        {
            "id": 140,
            "evolution": "Kabutops",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/141.svg",
            "level_evolution": 40
        },
        {
            "id": 142,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/142.svg",
            "level_evolution": null
        },
        {
            "id": 143,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg",
            "level_evolution": null
        },
        {
            "id": 144,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/144.svg",
            "level_evolution": null
        },
        {
            "id": 145,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/145.svg",
            "level_evolution": null
        },
        {
            "id": 146,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/146.svg",
            "level_evolution": null
        },
        {
            "id": 147,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/147.svg",
            "level_evolution": null
        },
        {
            "id": 148,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/148.svg",
            "level_evolution": null
        },
        {
            "id": 149,
            "evolution": "Dragonite",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg",
            "level_evolution": 55
        },
        {
            "id": 151,
            "evolution": "No evolution",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg",
            "level_evolution": null
        },
        {
            "id": 3,
            "evolution": "Venusaur",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
            "level_evolution": 32
        },
        {
            "id": 6,
            "evolution": "Charizard",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
            "level_evolution": 36
        },
        {
            "id": 9,
            "evolution": "Blastoise",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
            "level_evolution": 36
        },
        {
            "id": 13,
            "evolution": "Beedrill",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
            "level_evolution": 10
        },
        {
            "id": 15,
            "evolution": "Beedrill",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
            "level_evolution": 10
        },
        {
            "id": 18,
            "evolution": "Pidgeot",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
            "level_evolution": 36
        },
        {
            "id": 20,
            "evolution": "Raticate",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg",
            "level_evolution": 20
        },
        {
            "id": 22,
            "evolution": "Fearow",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg",
            "level_evolution": 20
        },
        {
            "id": 24,
            "evolution": "Arbok",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg",
            "level_evolution": 30
        },
        {
            "id": 26,
            "evolution": "Raichu",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg",
            "level_evolution": 22
        },
        {
            "id": 28,
            "evolution": "Sandshrew",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg",
            "level_evolution": 22
        },
        {
            "id": 31,
            "evolution": "Nidoqueen",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg",
            "level_evolution": 0
        },
        {
            "id": 34,
            "evolution": "Nidoking",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/34.svg",
            "level_evolution": 0
        },
        {
            "id": 36,
            "evolution": "Clefable",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/36.svg",
            "level_evolution": 0
        },
        {
            "id": 38,
            "evolution": "Ninetales",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/38.svg",
            "level_evolution": 0
        },
        {
            "id": 40,
            "evolution": "Wigglytuff",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg",
            "level_evolution": 0
        },
        {
            "id": 42,
            "evolution": "Golbat",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/42.svg",
            "level_evolution": 0
        },
        {
            "id": 45,
            "evolution": "Vileplume",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/45.svg",
            "level_evolution": 0
        },
        {
            "id": 47,
            "evolution": "Parasect",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/47.svg",
            "level_evolution": 0
        },
        {
            "id": 49,
            "evolution": "Venomoth",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/49.svg",
            "level_evolution": 0
        },
        {
            "id": 51,
            "evolution": "Dewgong",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/51.svg",
            "level_evolution": 0
        },
        {
            "id": 53,
            "evolution": "Grimer",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/53.svg",
            "level_evolution": 0
        },
        {
            "id": 55,
            "evolution": "Muk",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/55.svg",
            "level_evolution": 0
        },
        {
            "id": 57,
            "evolution": "Shellder",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/57.svg",
            "level_evolution": 0
        },
        {
            "id": 59,
            "evolution": "Cloyster",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/59.svg",
            "level_evolution": 0
        },
        {
            "id": 62,
            "evolution": "Gastly",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/62.svg",
            "level_evolution": 0
        },
        {
            "id": 65,
            "evolution": "Gengar",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/65.svg",
            "level_evolution": 0
        },
        {
            "id": 68,
            "evolution": "Onix",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/68.svg",
            "level_evolution": 0
        },
        {
            "id": 71,
            "evolution": "Steelix",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/71.svg",
            "level_evolution": 0
        },
        {
            "id": 73,
            "evolution": "Tentacruel",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/73.svg",
            "level_evolution": 0
        },
        {
            "id": 76,
            "evolution": "Gyarados",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/76.svg",
            "level_evolution": 0
        },
        {
            "id": 78,
            "evolution": "Lapras",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/78.svg",
            "level_evolution": 0
        },
        {
            "id": 80,
            "evolution": "Slowbro",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg",
            "level_evolution": 0
        },
        {
            "id": 82,
            "evolution": "Politoed",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/82.svg",
            "level_evolution": 0
        },
        {
            "id": 85,
            "evolution": "Mewtwo",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/85.svg",
            "level_evolution": 0
        },
        {
            "id": 87,
            "evolution": "Mew",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/87.svg",
            "level_evolution": 0
        },
        {
            "id": 89,
            "evolution": "Pidgey",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/89.svg",
            "level_evolution": 0
        },
        {
            "id": 91,
            "evolution": "Pidgeotto",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/91.svg",
            "level_evolution": 0
        },
        {
            "id": 94,
            "evolution": "Geodude",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/94.svg",
            "level_evolution": 0
        },
        {
            "id": 95,
            "evolution": "Golem",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/95.svg",
            "level_evolution": 0
        },
        {
            "id": 97,
            "evolution": "Onix",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/97.svg",
            "level_evolution": 0
        },
        {
            "id": 99,
            "evolution": "Hypno",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/99.svg",
            "level_evolution": 0
        },
        {
            "id": 101,
            "evolution": "Krabby",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/101.svg",
            "level_evolution": 0
        },
        {
            "id": 103,
            "evolution": "Kingler",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/103.svg",
            "level_evolution": 0
        },
        {
            "id": 105,
            "evolution": "Voltorb",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/105.svg",
            "level_evolution": 0
        },
        {
            "id": 106,
            "evolution": "Electrode",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/106.svg",
            "level_evolution": 0
        },
        {
            "id": 107,
            "evolution": "Exeggcute",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/107.svg",
            "level_evolution": 0
        },
        {
            "id": 110,
            "evolution": "Exeggutor",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/110.svg",
            "level_evolution": 0
        },
        {
            "id": 112,
            "evolution": "Marowak",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/112.svg",
            "level_evolution": 0
        },
        {
            "id": 117,
            "evolution": "Gyarados",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/117.svg",
            "level_evolution": 0
        },
        {
            "id": 119,
            "evolution": "Seaking",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/119.svg",
            "level_evolution": 0
        },
        {
            "id": 121,
            "evolution": "Starmie",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/121.svg",
            "level_evolution": 0
        },
        {
            "id": 122,
            "evolution": "Mr. Mime",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/122.svg",
            "level_evolution": 0
        },
        {
            "id": 130,
            "evolution": "Gyarados",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/130.svg",
            "level_evolution": 0
        },
        {
            "id": 132,
            "evolution": "Ditto",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
            "level_evolution": 0
        },
        {
            "id": 134,
            "evolution": "Gyarados",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/134.svg",
            "level_evolution": 0
        },
        {
            "id": 135,
            "evolution": "Gyarados",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/135.svg",
            "level_evolution": 0
        },
        {
            "id": 136,
            "evolution": "Gyarados",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/136.svg",
            "level_evolution": 0
        },
        {
            "id": 139,
            "evolution": "Omastar",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/139.svg",
            "level_evolution": 0
        },
        {
            "id": 141,
            "evolution": "Kabutops",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/141.svg",
            "level_evolution": 0
        },
        {
            "id": 150,
            "evolution": "Mewtwo",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg",
            "level_evolution": 0
        }
    ]

}