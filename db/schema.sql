DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE departments (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    department_name VARCHAR(30)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    role_id INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL
    FOREIGN KEY(role_id)
    REFERENCES departments(id)
);

-- CREATE TABLE employees (
--     id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
--     first_name VARCHAR(30),
--     last_name VARCHAR(30),
--     employee_id INT NOT NULL
--     -- FOREIGN KEY(employee_id)
--     -- REFERENCES roles(id)
--     -- ON DELETE CASCADE

-- )


