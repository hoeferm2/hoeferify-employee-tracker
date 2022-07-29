USE tracker_db;

INSERT INTO
    departments (department_name)
VALUES ("Engineering"), ("Accquistions"), ("Human Resources");

INSERT INTO
    roles (title, salary, department_id)
VALUES ("Head Engineer", 30000, 1), (
        "Accquistions Officer",
        25000,
        2
    ), (
        "Human Resource Lead",
        12500,
        3
    );

INSERT INTO
    employees (first_name, last_name, role_id)
VALUES ("Vikram", "Singh", 1), ("Arnie", "Duncan", 3);