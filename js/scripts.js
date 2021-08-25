let pokemonRepository = (function (){
    // MODAL
  // let modalContainer = document.querySelector('#modal-container');
  // let modal = document.querySelector('.modal');
  // let modalClose = document.createElement('button');
  //   modalClose.classList.add('modal-close');


  
  let pokemonList = [
  // {
  //     name: 'Braviary',
  //     height: 1.5,
  //     type: ['normal', 'flying']
  // },
  // {
  //     name: 'Ho-oh',
  //     height: 3.8,
  //     type: ['flying', 'fairy', 'fire', 'grass']
  // },
  // {
  //     name: 'Piplup',
  //     height: 0.4,
  //     type: ['water', 'ice']
  // },
  // {
  //     name: 'Rapidash',
  //     height: 1.7,
  //     type: ['fire', 'ice']
  // },
  // {
  //     name: 'Arbok',
  //     height: 3.5,
  //     type: 'grass'
  // }
  ];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    if (
    typeof pokemon === "object" &&
    "name" in pokemon
    ) {
        pokemonList.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");

    let listItem = document.createElement("li");
    listItem.addClass('group-list-item');

    let button = document.createElement('button');
      button.innerText = pokemon.name.toUpperCase();
      button.classList.add('button-class', 'btn', 'btn-primary');

      button.setAttribute('data-target', '#pokemonModal');
      pokemonButton.setAttribute('data-toggle', 'modal');

      listItem.appendChild(button);
      pokemonList.appendChild(listItem);

      button.addEventListener("click", function(event) {
        showDetails(pokemon);
      });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }



  function loadDetails(item) {
     let url = item.detailsUrl;
     return fetch(url).then(function (response) {
       return response.json();
     }).then(function (details) {
       item.imageUrl = details.sprites.front_default;
       item.height = details.height;
       item.types = details.types[0].type.name;
     }).catch(function (e) {
       console.error(e);
     });
   }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      showModal(item);
    });
  }

  // SHOW MODAL FUNCTION
  function showModal(items) {
    // modalContainer.classList.add('is-visible');
    let pokemonName = document.createElement('h1');
    pokemonName.classList.add('Pokemon-name');
    
    let imageElementFront = $('<img class="modal-img" style="width:50%">');
    imageElementFront.attr('src', item.imageUrlFront);
    let imageElementBack = $('<img class="modal-img" style="width:50%">');
    imageElementBack.attr('src', item.imageUrlBack);

    let pokemonHeight = document.createElement('p');
    pokemonHeight.classList.add('Pokemon-height');
    let pokemonType = document.createElement('p');
    pokemonType.classList.add('Pokemon-type');
    let pokemonAbilities = document.createElement('p');
    pokemonAbilities.classList.add('pokemon-abilities');

    modalTitle.append(pokemonName);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(pokemonHeight);
    modalBody.append(pokemonType);
    modalBody.append(pokemonAbilities);


  }

  // HIDE MODAL
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

    // TO CLOSE WINDOW OF MODAL
    modalClose.addEventListener('click' , hideModal);

    // WHEN ESC IS PRESSED TO CLOSE THE MODAL
     window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();  
      }
    });

    // WHEN OUTSIDE THE MODAL CLICKED
    modalContainer.addEventListener('click', (e) => {
      // Since this is also triggered when clicking INSIDE the modal
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
        if (target === modalContainer) {
          hideModal();
        }
      });

    return {
     add: add,
     getAll: getAll,
     addListItem: addListItem,
     loadList: loadList,
     loadDetails: loadDetails,
     showModal: showModal,
     hideModal: hideModal
    };

})();

// pokemonRepository.add({ name: 'Moltres', height: 2, type: ['Fire','Flying'] }); 
  // console.log(pokemonRepository.getAll());
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    });
});

Object.keys(pokemonRepository).forEach(function(property) {
console.log(pokemonRepository[property]);
});

let result = pokemonRepository.getAll().filter(pokemon => pokemon.length > 4);
  console.log(result);