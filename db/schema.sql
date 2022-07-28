DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE departments (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    department_name VARCHAR(30)
);

-- CREATE TABLE roles (
--     id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
--     department_id INT NOT NULL,
--     title VARCHAR(30),
--     salary DECIMAL,
--     FOREIGN KEY(department_id)
--     REFERENCES department(id)
--     ON DELETE CASCADE
-- );

-- CREATE TABLE employees (
--     id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
--     first_name VARCHAR(30),
--     last_name VARCHAR(30),
--     role_id INT NOT NULL
--     manager_id INT NOT NULL

-- )


