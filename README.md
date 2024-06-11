# Books Finder

Aplicativo desenvolvido com React Native que permite a busca e exibição de
informações sobre livros utilizando a API OpenLibrary do Internet Archive.

## Telas
1. Tela de Login
   1. Deve conter dois campos de entrada: Nome de Usuário e Senha.
   2. Deve incluir um botão "Entrar" que permitirá ao usuário efetuar o login no aplicativo.
   3. A validação dos campos de entrada deve ser implementada.
   4. O login deve ser efetuado apenas com o usuário admin e senha admin123.
2. Tela de Busca de Livros
   1. Deve conter um campo de entrada de texto: para o que será pesquisado.
   2. E um botão com as seguintes opções de busca
      1. Pesquisar livros por autor.
      2. Pesquisar livros por gênero.
      3. Pesquisar diretamente pelo nome do livro.
   3. Cada opção de busca deve estar claramente identificada e acessível ao usuário.
   4. A busca por autor deve retornar uma lista de livros escritos por esse autor.
   5. A busca por gênero deve exibir uma lista de livros pertencentes ao gênero especificado.
   6. A busca por nome de livro deve retornar informações detalhadas sobre o livro procurado.

## Recursos e Requisitos

* Utilize a biblioteca React Native para o desenvolvimento das telas.
* A interface do usuário deve ser limpa, intuitiva e responsiva.
* A integração com a API OpenLibrary do Internet Archive é necessária para a busca e exibição de informações sobre os livros.
* O código deve ser organizado, legível e seguir as melhores práticas de desenvolvimento.
* Não é permitido o uso de outras bibliotecas