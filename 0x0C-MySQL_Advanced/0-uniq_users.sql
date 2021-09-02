-- Creates a table users id, email (index), name

CREATE TABLE IF NOT EXISTS users (
    id INT UNIQUE AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255)
);
