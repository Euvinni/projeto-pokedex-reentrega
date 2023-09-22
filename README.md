Link do deploy: https://projeto-pokedex-reentrega.vercel.app/

Pokedex - Projeto de Exploração de Pokémon
O projeto "Pokedex" é uma aplicação que oferece uma experiência completa de exploração do mundo Pokémon. Com recursos de captura, os usuários podem adicionar novos Pokémon à sua coleção, além de acessar detalhes abrangentes sobre cada Pokémon, como estatísticas e habilidades. A flexibilidade de excluir Pokémon da coleção também está disponível. Esta aplicação proporciona uma jornada envolvente para os fãs, permitindo que interajam com os Pokémon de maneiras diversas e significativas.

Principais Recursos e Funcionalidades
Integração de APIs: Utilizamos a Poke API como fonte de dados, uma API pública amplamente reconhecida e usada em casos de aprendizado de programação.

React Router: Gerenciamos a navegação entre páginas com o React Router para oferecer uma experiência de usuário suave.

Design Systems: Implementamos um sistema de design para manter uma interface consistente em todo o aplicativo.

Estado Global: Usamos o React Context para gerenciar o estado global do aplicativo, permitindo que os dados sejam compartilhados entre componentes.

Estrutura do Projeto
O projeto segue uma estrutura organizada para facilitar o desenvolvimento e a manutenção:

src: Contém todas as pastas e arquivos do projeto.

assets: Armazena imagens dos tipos de Pokémon e outros recursos utilizados.

Components: Contém os componentes reutilizáveis do aplicativo.

PokemonCard: Renderiza informações e botões para cada Pokémon.

Header: Cada página possui um header com uma interface específica.

constants: Mantém a URL padrão da API utilizada.

contexts: Contém os arquivos de contexto utilizados no projeto.

Pages: Contém as diferentes páginas da aplicação.

PokemonListPage: Página inicial com a lista de Pokémon para interação.

PokemonDetailPage: Página de detalhes de um Pokémon selecionado.

PokedexPage: Página que exibe os Pokémon adicionados à Pokedex.

routes: Gerencia as rotas do aplicativo.

coordinator: Retorna funções para navegação entre as páginas, utilizando parâmetros para definir o destino.

Router: Componente que controla a navegação entre as páginas, identificando cada uma com um valor que é passado para o coordenador e utilizado no App.js.

Como Iniciar
Para começar a usar o aplicativo, siga as etapas abaixo:

Certifique-se de ter o Node.js e o npm instalados em seu sistema.

No diretório do projeto, execute o comando npm install para instalar as dependências.

Em seguida, inicie o aplicativo com o comando npm run start.

Tecnologias e Ferramentas Utilizadas
Este site foi construído com as seguintes tecnologias:

React
React Hooks
React Router DOM
React Context API
Axios para integração com a Poke API
Styled-Components para estilização
React Icons para ícones
Aproveite a jornada de exploração Pokémon com a Pokedex! Divirta-se capturando, explorando detalhes e construindo sua coleção de Pokémon.
