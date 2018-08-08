var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');
var colors = require('colors');


console.log(colors.green('hello'));

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // connection.query(selectQuery + " " + where, function(err, response) {
    //     if(err)throw err;
    //     console.log(response);
});

function showDB() {
    var table = new Table({
        head: ['Item ID', 'Product Name', 'Price'],
        colWidths: [10, 75, 10]
    });

    var query = "SELECT item_id, product_name, price FROM products";
    
    connection.query(query, function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    table.push(
                        [res[i].item_id,
                        res[i].product_name,
                        "$" + res[i].price]
                    );
                }
                    console.log(table.toString().bold.red);
                    connection.end();
            });
        }
 
showDB();


