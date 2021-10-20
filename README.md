# Introdução
API com o objetivo de facilitar a vida dos leitores de livros, seja descobrindo novos livros, ou até servindo como um lugar onde a pessoa conta como foi sua experiência com determinado livro. O ponto principal da aplicação está nas reviews, é possível que usuários escrevam reviews sobres os livros, dando suas opiniões e uma nota para eles, a partir disso outros usuários poderão ler tais resenhas, tendo a opção de curtir, ou descurtir. 

## Autenticação das rotas
Há rotas públicas e privadas

## Error Codes
** 401 - Unauthorized ** 
Ação não autorizada para o usuário.

** 401 - invalid token ** 
Token de validação inválido.

** 401 - Token missing ** 
Necessário Token, porém não encontrado.

** 404 - User not found ** 
Usuário não existe no banco.

** 404 - Book not found ** 
Livro não existe no banco.

** 404 - Review not found ** 
Review não existe no banco.

** 404 - Reviews not found **
Usuário ou livro não possuem reviews no banco.

### Em construção...
