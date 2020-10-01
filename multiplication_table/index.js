// For this case I chose to print in 2 ways first is using document.writeln() in the loop
// and second is printing array (printTableArray)

// Array that store the statement result on second for loop
var arrayResult = new Array();
// Array that will store the final result to be print in console
var printTableArray = new Array();

// Create a function that will print multiplication table 9 * 9
function printMultiplicationTable(){
    // First For Loop -- Iterate each number (1-9)
    for (var i = 1; i <= 9; i++) {
        // Second Loop staring from j=1 until it meets the current element in [i]
        // Example: i = 2 ; Execute this for loop 2 times until (j = i)
        for(var j=1; j <= i; j++)
        {
            // Variable that will store the product of (j*i)
            var productResult = (j * i);
            // Insert the value of j, i , product result to arrayResult
            arrayResult.push(`${i} * ${j} = ${productResult}`);
             // Print the value of j, i , product to the browser
            document.writeln(`${i} * ${j} = ${productResult} `);
        }
        // Next line
        document.write("<br>");
        // Insert the value of arrayResult to printTableArray
        printTableArray.push(arrayResult);
        // arrayResult value must be new for the next element (Example: Table of 2)
        arrayResult = new Array();
    }
    // Return printTableArray that can be print in console
    return printTableArray;
}
console.log(printMultiplicationTable());