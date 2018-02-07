// 1. Looping a triangle
for (var symbol = "#"; symbol.length < 8; symbol += "#")
  console.log(symbol);

// 2. FizzBuzz - part 1
for (var number = 1; number <= 100; number++) {
    var result = "";
     if (number % 5 == 0) {
       if (number % 3 != 0)
        result += "Buzz";
     } if (number % 3 == 0) { 
        result += "Fizz";
     }
      console.log(result || number);
    }

// 2. FizzBuzz - part 2
for (var number = 1; number <= 100; number++) {
    var result = "";
     if (number % 3 == 0) {
        result += "Fizz";
     } if (number % 5 == 0) { 
        result += "Buzz";
     }
      console.log(result || number); 
    }

// 3. Chess Board
