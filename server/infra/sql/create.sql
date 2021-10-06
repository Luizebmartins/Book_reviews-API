
CREATE TABLE usuario (
    id serial PRIMARY KEY,
    login varchar(50) NOT NULL,
    senha varchar(100) NOT NULL,
    nome text NOT NULL,
    email varchar(100) UNIQUE NOT NULL
);

CREATE TABLE resenha (
    id serial PRIMARY KEY,
    data timestamp default now(),
    titulo text NOT NULL,
    texto text NOT NULL,
    count_likes integer DEFAULT 0,
    count_dislikes integer DEFAULT 0,
    nota_livro float NOT NULL,
    id_usuario integer REFERENCES usuario(id) NOT NULL
);

CREATE TABLE livro (
    id serial PRIMARY KEY,
    titulo text NOT NULL,
    publicadora varchar(255) NOT NULL,
    data_publicacao date NOT NULL,
    nota float NOT NULL,
    paginas integer NOT NULL,
    descricao text NOT NULL,
    isbn text UNIQUE NOT NULL
);

CREATE TABLE autor (
    id serial PRIMARY KEY,
    nome text UNIQUE NOT NULL
);

CREATE TABLE escrito_por (
    id serial PRIMARY KEY,
    id_autor integer REFERENCES autor(id) NOT NULL,
    id_livro integer REFERENCES livro(id) NOT NULL,
    UNIQUE(id_autor, id_livro)
);