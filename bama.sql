DROP DATABASE IF EXISTS bamazonDB;

CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)

);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Haribo Gold-Bears Gummy Candy Goldbaren', 'Candy', 29.44, 59);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Kuhn Rikon Knife Stand', 'Housewares', 40.00, 14);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('GoWISE USA Programmable Air Fryer', 'Housewares', 69.00, 78);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('CubeTech Health Light', 'Lighting', 22.29, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Jokari Beverage Opener', 'Housewares', 7.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Inf-way Garden Genie Gloves', 'Garden', 8.99, 17);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('The Sushi Bazooka', 'Housewares', 5.00, 16);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Moosh Natural Dog Shampoo', 'Petcare', 15.99, 32);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Unicorn Tape Dispenser', 'Housewares', 10.00, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Running Buddy Pouch', 'Fitness', 23.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Dash Mini Waffle Maker', 'Housewares', 10.39, 23);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Zotz Strings, Blue Razz, Orange and Grape', 'Candy', 24.99, 48);



