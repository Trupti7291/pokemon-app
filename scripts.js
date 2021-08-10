let pokemonList = [
    { name: 'Braviary', height: 5, type: ['normal', 'flying'] },
    { name: 'Ho-oh', height: 4, type: ['flying', 'fairy', 'fire', 'grass'] },
    { name: 'Piplup', height: 1, type: ['water', 'ice'] },
    { name: 'Rapidash', height: 1.7, type: ['fire', 'ice'] }

];

pokemonList.forEach(function(pokemonList){
    console.log('Name : ' + pokemonList.name + ' [ Height : ] ' + pokemonList.height + ' m] Type : ' + pokemonList.type);
  })