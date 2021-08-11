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

function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        button.addEventListener('click', function(event){
            showDetails(pokemon);
        })

}
function showDetails(pokemon){
    console.log(pokemon);
}
    function add(pokemon){
     pokemonList.push(pokemonList);
    }

    function getAll(){
     return pokemonList;
    }

    return {
        add : add ,
        getAll : getAll,
        addListItem : addListItem
    };
    })();

Object.keys(pokemonRepository).forEach(function(property) {
  console.log(pokemonRepository[property]);
});

     pokemonRepository.add({ name: 'Moltres', height: 2, type: ['Fire','Flying'] });
      // console.log(pokemonRepository.getAll());
      pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
});

let result = pokemonRepository.getAll().filter(pokemon => pokemon.length > 4);

console.log(result);