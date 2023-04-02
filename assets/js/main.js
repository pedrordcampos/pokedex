
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


/*  Primeira forma
    fetch(url)
    .then(function (response) {
        response.json().then(function (responseBody) {
            console.log(responseBody);
        });
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function (){
        console.log('Requisição concluída!');
    }); 
*/
function convertPokemonToHTML(pokemon) {
    return ` 
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
                alt="${pokemon.name}">
        </div>       
    </li>  `
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons) => { 
        const listaItens = [];
        // debugger // permite debugar o código no browser no nodeJs
        // console.log(pokemonList);

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            // listaItens.push(convertPokemonToHTML(pokemon)); 
            pokemonList.innerHTML += convertPokemonToHTML(pokemon) // adicionando uma nova lista
        }
    })
    
