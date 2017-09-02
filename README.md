# Projeto Final

Com base nos códigos previamente criados quero que você tenha os seguintes módulos:

- User(name, type, email)
- Course(name, teacher, books, students)
- Book(title, author, pages)

Onde 1 Course deverá ter **apenas** 1 User do type teacher, 

O campo `students` deverá ser definido assim:

```js

students: [{ type: Schema.Types.ObjectId, ref: 'User' }]

```

E o campo `books` assim:

```js

books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]

```

Fora as funções que já criamos quero que você implemente um método de pesquisa pelo `name`, <br>
porém esse valor deve vir via QUERYSTRING e não via parâmetro do `req.params`!

ps: No esqueça de utilizar REGEX para pesquisar com *case insensitive*!

Além das funções de CRUD você também precisará criar a seguinte rota:

- api/course/:id/populate

Onde você deverá usar a função de populate do Mongoose.

> **No esqueça que TODAS as funções a serem utilizadas precisam estar na pasta (global) actions!!!**

## Bônus

Eu subi 2 exemplos usando Promises, caso você consiga refatorar seu código para utilizar<br> 
Promises você já está com a vida ganha! ;)

## Pesquisa necessária

- [pegando parâmetros da URL no Express](http://expressjs.com/pt-br/api.html#req.param)
  - **use o req.query!!!**
- [relacionamento utilizando Mongoose](http://mongoosejs.com/docs/populate.html)
