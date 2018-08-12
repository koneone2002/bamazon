var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');
var colors = require('colors');
var totalPrice = 0;

console.log(colors.bold.green("\n \n- - - - - - - - - - - - - - - - - - - - - - - "));
console.log(colors.bold.green('Hello Welcome to BamaZon!'));
console.log(colors.bold.green("- - - - - - - - - - - - - - - - - - - - - - -\n"));

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
 

});

var startUp = function () {
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
                    "$" + res[i].price
                ]
            );
        }
        console.log(table.toString().bold.red);
        promptUser();
        //table is loaded and ready
    });
    

    function promptUser() {
    
        inquirer.prompt([
            {
            type: 'input',
            name: 'item',
            message: '\nPlease select an item to buy, use the Item ID number',
            validate: function integerCheck(item) {
                if (isNaN(item) === false) {
                    return true;
                } else {
                    return false;
                }
                if(item !== res[0].item_id) {
                    console.log("That item number does not exist");
                }
    
    
            }
        },
    
            {
                type: 'input',
                name: 'quantity',
                message: '\nHow many would you like?',
                validate: function integerCheck(quantity) {
                    if (isNaN(quantity) === false) {
                        return true;
    
                    } else {
                        return false;
                    }
    
                }
            }
        ]).then(function (answer) {
            
            var select = "SELECT ?? FROM ?? WHERE ?? = ?";
            var response = ['*', 'products', 'item_id', answer.item];
            select = mysql.format(select, response);
            connection.query(select, function (err, results) {
                var totalPerSelection = answer.quantity * results[0].price;
                totalPrice += totalPerSelection;
                if (answer.quantity <= results[0].stock_quantity) {
                    console.log("Thank you for your order of: \n" + answer.quantity + " " + results[0].product_name +  "\nTotal comes to: $" + totalPrice.toFixed(2));
    
                    var quantitySelected = results[0].stock_quantity - answer.quantity;
                    var sQuery = connection.query(
                        "UPDATE products SET ? WHERE ?", [{
                                stock_quantity: quantitySelected
                            },
                            {
                                item_id: results[0].item_id
                            }
                        ],
                        function (err, results) {
                            //console.log("hello we made it this far");
                            var yesNo = function(){
                                inquirer.prompt([
                                    {
                                        type: 'confirm',
                                        message: 'Do you want to keep shopping?',
                                        name: 'confirm',
                                        default: true
                        
                                    }
                                   
                                ]).then(function(response){
                                    
                                    if(response.confirm){
                                        promptUser();
                                    } else if(totalPerSelection !==0){
                                        
                                        console.log("Total owed for today's purchses: \n$" + totalPrice.toFixed(2) + "\nSorry to see you go - come back soon!\n\n\n");
                                        console.log(colors.bold.green("- - - - - - - - - - - - - - - - - - - - - - -\n"));

                                        connection.end();            
                        
                                    }
                                   
                                })
                            }
                            yesNo();
                            
                        }
                    )
                } else {
                    totalPrice = 0;
                    console.log("I'm sorry, but we currently only have " + results[0].stock_quantity + " in stock. \nWould you like to try again?");
                    promptUser();
                }
            })
    
        })
    }
}


startUp();

