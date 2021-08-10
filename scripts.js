let pokemonRepository = (function (){
    let pokemonList = [
    {
        name: 'Braviary',
        height: 1.5,
        type: ['normal', 'flying']
    },
    {
        name: 'Ho-oh',
        height: 3.8,
        type: ['flying', 'fairy', 'fire', 'grass']
    },
    {
        name: 'Piplup',
        height: 0.4,
        type: ['water', 'ice']
    },
    {
        name: 'Rapidash',
        height: 1.7,
        type: ['fire', 'ice']
    },
    {
        name: 'Arbok',
        height: 3.5,
        type: 'grass'
    }
];

    function add(pokemon){
     pokemonList.push(pokemonList);
    }

    function getAll(){
     return pokemonList;
    }

    return {
        add : add ,
        getAll : getAll
    };
    })();

// console.log(pokemonRepository.getAll());
 pokemonRepository.add({ name: 'Moltres', height: 2, type: ['Fire','Flying'] });
// console.log(pokemonRepository.getAll());


Object.keys(pokemonRepository).forEach(function(property) {
  console.log(pokemonRepository[property]);
});
    
pokemonRepository.getAll().forEach(function(pokemon){
    if (pokemon.height > 3.5 && pokemon.height < 4) {
     // this will display the longest pokemon from the list above
     console.log(`${pokemon.name} Height: ${pokemon.height}m - I\'m the Tallest/Longest Pokemon.`);
 }
 else {
     console.log(`<p>${pokemon.name} Height: ${pokemon.height}m </p> `);
 }
});

let result = pokemonRepository.getAll().filter(pokemon => pokemon.length > 4);

console.log(result);