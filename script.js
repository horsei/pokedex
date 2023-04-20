const pokecontainer = document.getElementById('pokecontainer');
const pokemon_count = 151;
const colors = {
    normal: '#A8A77ABB',
	fire: '#EE8130BB',
	water: '#6390F0BB',
	electric: '#F7D02CBB',
	grass: '#7AC74CBB',
	ice: '#96D9D6BB',
	fighting: '#C22E28BB',
	poison: '#A33EA1BB',
	ground: '#E2BF65BB',
	flying: '#A98FF3BB',
	psychic: '#F95587BB',
	bug: '#A6B91ABB',
	rock: '#B6A136BB',
	ghost: '#735797BB',
	dragon: '#6F35FCBB',
	dark: '#705746BB',
	steel: '#B7B7CEBB',
	fairy: '#D685ADBB',
}

const maintypes= Object.keys(colors)




const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const searchInput = document.getElementById('search-input');
  const searchQuery = searchInput.value.toLowerCase();

  // Call a function to filter the Pokemon data and display the results
});



function displayPokemon(filteredPokemon) {
  const pokemonContainer = document.getElementById('pokemon-container');
  pokemonContainer.innerHTML = '';

  filteredPokemon.forEach(function(pokemon) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.imageUrl;
    pokemonImage.alt = pokemon.name;

    const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemon.name;

    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonName);

    pokemonContainer.appendChild(pokemonCard);
  });
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const searchInput = document.getElementById('search-input');
  const searchQuery = searchInput.value.toLowerCase();

  const filteredPokemon = pokemonData.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchQuery);
  });

  displayPokemon(filteredPokemon);
});


const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data)
}





const createPokemonCard=(pokemon) => {
    const pokemonEl=document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name=pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id=pokemon.id.toString().padStart(3,'0')
    

    const poketypes=pokemon.types.map(type => type.type.name)
    const type=maintypes.find(type => poketypes.indexOf(type)>-1)
    const color = colors[type]
    const typeg=type.toString()
    

    pokemonEl.style.backgroundColor=color

    const pokemonHTML = `
    <div class="imagecontainer">
        <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="">
    </div>
    <div class="info">
        <span class="number">${id}</span>
        <h3 class="name">${name}</h3>
        <span class="type"><span>${type}</span></span>
    </div>
    `
    pokemonEl.innerHTML=pokemonHTML
    pokecontainer.appendChild(pokemonEl)
}

fetchPokemons()


