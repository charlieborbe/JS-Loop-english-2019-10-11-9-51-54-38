// Variable that store the range (20)
var range = 20;

// Create a loop which can determine if i is odd/even number (0-20)
for (var i = 0; i <= range; i++) {
    // First condition where i modulo 2  == 0 (Result: i is Even Number)
    if (i%2 == 0){
        // Print result in console (even number)
        console.log(`${i} is even number. `);
    }
    // i is Odd Number
    else{
        // Print result in console (odd number)
        console.log(`${i} is odd number. `);
    }
}