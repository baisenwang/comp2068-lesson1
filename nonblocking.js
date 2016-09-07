/**
 * Created by L on 2016-09-07.
 */
var fs = require('fs');

var food = fs.readFile('food.txt','utf8',function(err,food){
    console.log(food);
    console.log('Drinks:');
});

console.log('Food:');

// load drinks asynchronously
var drinks = fs.readFile('drinks.txt', 'utf8', function (err,drinks) {
    if(err){
        console.log(err);
    }
    else{
        console.log(drinks);
    }

})

