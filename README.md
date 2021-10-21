# Introdução
API com o objetivo de facilitar a vida dos leitores de livros, seja descobrindo novos livros, ou até servindo como um lugar onde a pessoa conta como foi sua experiência com determinado livro. O ponto principal da aplicação está nas reviews, é possível que usuários escrevam reviews sobres os livros, dando suas opiniões e uma nota para eles, a partir disso outros usuários poderão ler tais resenhas, tendo a opção de curtir, ou descurtir. 

# Autenticação
Há rotas públicas e privadas

# Error Codes
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
# Rotas de usuários


## End-point: Criação de usuário
### Descrição: cria um usuário.
```
Uma criação com sucesso retornará um status code *HTTP 201*
```

Method: POST
>```
>/users
>```
### Body (**raw**)

```json
{
 "name": "User",
 "password": "Secret",
 "email": "user@email"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Busca de usuário
### Descrição: buscar os dados do usuário logado.
```
Uma busca bem sucedida retornará o status code *HTTP 200*
```
Method: GET
>```
>/users/id
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjozNCwiZW1haWwiOiJ1c2VyQGVtYWlsIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2MzQ2OTAwNDIsImV4cCI6MTYzNDc3NjQ0Mn0.EPGOXdUthBqOQ50_61_Mj2t4LtyCf-IIj1AYlPBuMaA|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Remoção de usuário
### Descrição: Remove a conta do usuário. Apenas o dono dela poderá fazer isso.
```
Uma remoção bem sucedida retornará o status code *HTTP 200*
```
Method: DELETE
>```
>/users/id
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjozNCwiZW1haWwiOiJ1c2VyQGVtYWlsIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2MzQ3Njg0MDYsImV4cCI6MTYzNDg1NDgwNn0.As28QkxS7M5BQ_ESYe2lg55VcnR4ZEc-uaEmjmVH-9Y|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Atualização de usuário
### Descrição: Atualiza os dados do usuário, apenas o dono poderá fazer isso. Não é necessário ter todos os atributos no body.
```
Uma atualização bem sucedida retornará o status code *HTTP 200*
```
Method: PUT
>```
>/users/id
>```
### Body (**raw**)

```json
{
 "name": "new name user",
 "password": "secret",
 "email": "newuser@email"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjozNCwiZW1haWwiOiJ1c2VyQGVtYWlsIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2MzQ3Njg0MDYsImV4cCI6MTYzNDg1NDgwNn0.As28QkxS7M5BQ_ESYe2lg55VcnR4ZEc-uaEmjmVH-9Y|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: login
### Description: Eealiza o login e recebe o token de autenticação.
```
Um Login bem sucedido retornará o status code *HTTP 200*
```

Method: POST
>```
>/users/login
>```
### Body (**raw**)

```json
{
    "email": "user@email",
    "password": "Secret"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# Rotas de livros 


## End-point: Insere livro
### Descrição: Inseri um livro. Apenas o admin consegue fazer essa operação.
```
Uma inserção bem sucedida retornará o status code *HTTP 201*
```
Method: POST
>```
>/books
>```
### Body (**raw**)

```json
{
    "title": "Livro 1",
    "publisher": "Publicadora 1",
    "published_date": "10-20-2021",
    "rating": 0,
    "page_count": 50,
    "description": "lorem ipdssum",
    "isbn": "100",
    "image_link": "Link-1",
    "authors": ["author 1", "author 2"]
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjozMiwiZW1haWwiOiJhZG1pbkBhZG1pbiIsImFkbWluIjp0cnVlLCJpYXQiOjE2MzQ3Njk5OTEsImV4cCI6MTYzNDg1NjM5MX0.Gk1l-p5bGeWiqrs--oCZz7A9fTqkWT0IT4WRIszrdAQ|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Busca por título ou autor
### Description: busca livros a partir do nome ou do autor que os escreveu.
```
Uma busca bem sucedida retornará o status code *HTTP 200*
```
Method: GET
>```
>/books/search/titleOrAuthor
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Busca por id
### Descrição: Busca livro que possui o id passado como parâmetro.
```
Uma busca bem sucedida retornará o status code *HTTP 200*
```
Method: GET
>```
>/books/id
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Atualiza livro
### Descrição: Atualiza os dados do livro que possui o id passado como parâmetro. Apenas o admin consegue fazer essa operação.
```
Uma atualização bem sucedida retornará o status code *HTTP 200*
```
Method: PUT
>```
>/books/id
>```
### Body (**raw**)

```json
{
    "title": "teste"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Remove livro
### Descrição: Remove o livro pelo seu id. Apenas o admin consegue fazer essa operação.
```
Uma remoção bem sucedida retornará o status code *HTTP 200*
```
Method: DELETE
>```
>/books/id
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjozMiwiZW1haWwiOiJhZG1pbkBhZG1pbiIsImFkbWluIjp0cnVlLCJpYXQiOjE2MzQ3NzEyNjMsImV4cCI6MTYzNDg1NzY2M30.75wjBw1OWZ30VWlKnr6O4FFvTP56gLc_TywEzEeTy7o|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

#rotas de reviews 


## End-point: Insere review
### Descrição: Insere uma review sobre um livro.
```
Uma inserção bem sucedida retornará o status code *HTTP 201*
```
Method: POST
>```
>/reviews
>```
### Body (**raw**)

```json
{
    "title": "Review 1",
    "content": "Lorem ipsum",
    "rating": "5",
    "id_book": "42",
    "id_user": "37"

}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjozNywiZW1haWwiOiJ1c2VyQGVtYWlsIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2MzQ3NzM1MDUsImV4cCI6MTYzNDg1OTkwNX0.4WPLxadD2EDcfnfgwkGdZRwOL3O6VEm_YmfT7dmW68A|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Busca review por id
### Descrição: Busca uma review a partir de seu id.
```
Uma busca bem sucedida retornará o status code *HTTP 200*
```
Method: GET
>```
>/reviews/id
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Busca reviews de um livro
### Descripção: Busca todas as reviews relacionadas ao livro com o id passado como parâmetro.
```
Uma busca bem sucedida retornará o status code *HTTP 200*
```
Method: GET
>```
>/reviews/id/books
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Busca reviews de um usuário
### Descrição: Busca todas as reviews relacionadas ao usuário com o id passado como parâmetro.
```
Uma busca bem sucedida retornará o status code *HTTP 200*
```
Method: GET
>```
>/reviews/id/users
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Atualiza review
### Descrição: Atualiza os dados da review que possui o id passado como parâmetro. Apenas o dono da review pode usar essa rota. Não é necessário passar todos os atributos.
```
Uma atualização bem sucedida retornará o status code *HTTP 200*
```
Method: PUT
>```
>/reviews/id
>```
### Body (**raw**)

```json
{
    "title": "New title",
    "content": "New content",
    "rating": "4"

}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjozNywiZW1haWwiOiJ1c2VyQGVtYWlsIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2MzQ3NzM1MDUsImV4cCI6MTYzNDg1OTkwNX0.4WPLxadD2EDcfnfgwkGdZRwOL3O6VEm_YmfT7dmW68A|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Remove review
### Descrição: Remove a review com o id passado como parâmetro.
```
Uma remoção bem sucedida retornará o status code *HTTP 200*
```
Method: DELETE
>```
>/reviews/id
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjozNywiZW1haWwiOiJ1c2VyQGVtYWlsIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2MzQ3NzM1MDUsImV4cCI6MTYzNDg1OTkwNX0.4WPLxadD2EDcfnfgwkGdZRwOL3O6VEm_YmfT7dmW68A|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
