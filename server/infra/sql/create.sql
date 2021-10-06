
CREATE TABLE users (
    id serial PRIMARY KEY,
    login varchar(50) NOT NULL,
    password text NOT NULL,
    name text NOT NULL,
    email varchar(100) UNIQUE NOT NULL,
    admin boolean DEFAULT 'false'
);

CREATE TABLE reviews (
    id serial PRIMARY KEY,
    date timestamp default now(),
    title text NOT NULL,
    content text NOT NULL,
    count_likes integer DEFAULT 0,
    count_dislikes integer DEFAULT 0,
    rating float NOT NULL,
    id_user integer REFERENCES users(id) NOT NULL
);

CREATE TABLE books (
    id serial PRIMARY KEY,
    title text NOT NULL,
    publisher varchar(255) NOT NULL,
    published_Date date NOT NULL,
    rating float NOT NULL,
    page_count integer NOT NULL,
    description text NOT NULL,
    isbn text UNIQUE NOT NULL
);

CREATE TABLE authors (
    id serial PRIMARY KEY,
    name text UNIQUE NOT NULL
);

CREATE TABLE write_by (
    id serial PRIMARY KEY,
    id_author integer REFERENCES authors(id) NOT NULL,
    id_book integer REFERENCES books(id) NOT NULL,
    UNIQUE(id_author, id_book)
);