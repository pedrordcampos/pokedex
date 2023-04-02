const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {

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

    return fetch(url) // espera uma promisse
            .then((response) => response.json()) // converte a promisse em um objeto json
            .then(jsonBody => jsonBody.results) // pega o argumento results do objeto
            .catch((error) => console.log(error))
}
