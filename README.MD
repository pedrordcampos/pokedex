Instalar npm install -g http-server
Subir o servidor com node.js através do comando: http-server ./

Json - JavaScript Object Notation (JSON) é um formato baseado em texto padrão para representar dados estruturados com base na sintaxe do objeto JavaScript.

API - significa Application Programming Interface (Interface de Programação de Aplicação). No contexto de APIs, a palavra Aplicação refere-se a qualquer software com uma função distinta. A interface pode ser pensada como um contrato de serviço entre duas aplicações.

API RESTful OU REST - é uma interface de programação de aplicações (API ou API web) que está em conformidade com as restrições do estilo de arquitetura REST, permitindo a interação com serviços web RESTful. REST é a sigla em inglês para "Representational State Transfer", que em português significa tansferência de estado representacional.

REQUISIÇÃO HTTP
URL:    https://pokeapi.co/api/v2/pokemon
        ${IP}/${path}

PATH = caminho de identificação do recurso.

REQUEST METHOD (Tipos de solicitações):
GET | POST | DELETE | PUT | PATCH

GET - Buscar
POST - Inserir
PUT - Atualizar
DELETE - Apagar
PATCH - Modificar (apenas no recurso que está sendo utilizado)

PATH PARAMS
Passagem de parâmetro dentro da url
EXEMPLO
O '/2' nesse caso irá buscar um segundo pokemon
https://pokeapi.co/api/v2/pokemon/2 

QUERY STRING
Filtro parecido com o where no SQL, pode ser acessada após o ? (caso haja) no path. Estrutura chave e valor.

EXEMPLO
Caso eu queira buscar um tipo de pokemon, pesquisando pela query string: 
https://pokeapi.co/api/v2/pokemon?type=poison

Para inserir outra condição usamos o &
EXEMPLO
Buscando pelo tipo e pelos nomes que começam com i
https://pokeapi.co/api/v2/pokemon?type=poison&name=i

Request Headers
    Configuração do que podemos receber ex: */* recebe qualquer tipo de arquivo.

Response Headers
    Resposta do servidor, aquilo que nos devolve, ex: Json

Body - corpo da requisição / Utilizado normalmente com POST | PATCH | PUT

Response Headers
    content-type: application/json;
Request Body {
    "name": "novo-pokemon"
}

** SERVIDOR **
Response Headers
Status Code - resposta em forma de número 
    (famíla 200: Sucesso)
    (família 300: Redirect)
    (família 400: Erro do cliente)
    (família 500: Erro do servidor)
