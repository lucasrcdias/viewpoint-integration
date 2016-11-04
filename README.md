# viewpoint-integration
Viewpoint integration JS

## Docs
Documentação para integração com o viewpoint

#### Instalação

O viewpoint pode ser instalado de duas formas:

##### Download

[Download do código](https://github.com/lucasrcdias/viewpoint-integration/blob/master/dist/viewpoint.min.js)

##### Bower

`bower install --save viewpoint`

Agora basta instalar:

`<script src="/path/to/viewpoint/viewpoint.min.js"></script>`

#### Uso

Incialmente você precisa inicializar o Viewpoint na sua aplicação, basta usar o código abaixo:

`var viewpoint = new Viewpoint("your_api_key")`

Depois de inicializar, você pode utilizar o seguinte código para enviar os eventos:

`viewpoint.send("open", "home", { "age": 20 })`

A função `send` aceita os seguintes parâmetros:

- name (String) : Nome do evento que deseja registrar. Ex: "clique-botão-registro"

- group (String) : Nome do grupo do event. Ex: "homepage"

- params (Object) : Objeto com parâmetros adicionais para registro. Ex: { "age": 20, "gender": "male" }
