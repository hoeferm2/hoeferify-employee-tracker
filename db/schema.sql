DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE
    departments (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        department_name VARCHAR(30)
    );

CREATE TABLE
    roles (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        title VARCHAR(30),
        salary DECIMAL(10, 3),
        department_id INT,
        FOREIGN KEY(department_id) REFERENCES departments(id)
    );

CREATE TABLE
    employees (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        first_name VARCHAR(30),
        last_name VARCHAR(30),
        role_id INT NOT NULL,
        FOREIGN KEY(role_id) REFERENCES roles(id)
    )