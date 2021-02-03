// ***For all the exercises, be sure to log the output of the function to the console.***

        /************************************************************************************/
        // Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

        //your code...
        function tekCamp() {
            for (let i = 1; i<=100; i++){
                if (i % 3 === 0  && i % 5 ===0)
                console.log("TEKcamp");

                if (i % 3 === 0)
                console.log("TEK");
                
                if (i % 5 === 0)
                console.log("camp");

                console.log(i);
            }
                
        }
        tekCamp();

        /************************************************************************************/
        //Write a function that converts the current temperature from Fahrenheit to Celsius. 

        //your code...
        function farenheitCelsius(farenheit) {
            let celsius = (farenheit - 32) * 5/9;
            console.log(celsius);
        }
        farenheitCelsius(50);

        /************************************************************************************/
        //Write a function that converts the Celsius temperature back to Fahrenheit. 

        //your code...
        function celsiusFarenheit(celsius) {
            let farenheit = (celsius * (9/5)) + 32; 
            console.log(farenheit);
          }
        celsiusFarenheit(10);

        /************************************************************************************/
        // Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.

        //your code...
        function canVote(age) {
            if (age >= 18)
            return true;
            else if(age <18)
            return false;
        }
        const ableToVote = canVote(19);
        console.log(ableToVote);
    
        /************************************************************************************/
        // Write a function that converts a string to an array. It should return an array.  

        //your code...
        function strToArr(someString) {
            var array = someString.split(" ");
            return array;
        }
        console.log(strToArr("random text"));

        /************************************************************************************/
        // Write a function that reverses your telephone number.  It should return the reversed telephone number.

        //your code...
        function reversePhone(number) {
            let numberArray = number.toString()
            .split("")
            .reverse().join("");
            return numberArray;
        }
        console.log(reversePhone(9723457865));

        /************************************************************************************/
        // Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.

        //your code...

        var myCar = {
            make : "Chevrolet",
            model : "Silverado",
            year : 2015,
            color : "white"
        };

        function myCarDetail(){
            console.log(myCar)
        }
        myCarDetail();

        /************************************************************************************/
        // Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

        //example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}

        //your code...


        function oddOrEven(list){
            newList = [];
            for (let j = 0; j <= list.length - 1; j++){
                if (list[j] % 2 === 0 ){
                    newList.push(list[j] + ": even");
                } else {
                    newList.push(list[j] + ": odd");
                }
            }
            console.log(newList);
        }
        oddOrEven([10,23,3,4,8,13])
        /************************************************************************************/
        const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        // Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.

        //your code...

        function arrayNumbers(){
            for (let i  = 0; i < numbers.length; i += 3 ){
                console.log(numbers[i]);
                }
        }
        arrayNumbers();

        /************************************************************************************/
        const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {program : 'TEKcamp'} ];
        //access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

        const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
        // Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".
        console.log(foodArray.slice(-1)[0]);

        var school = "TEKcamp";
        foodArray[foodArray.length - 1] = school;
        console.log(foodArray.slice(-1)[0]);
        
        
        console.log("") 
        
        
        foodLength = foodArray.length;
        
        for (i = 0; i  < foodLength; i++){
          var check = foodArray[i];
          var adj = adjectiveArray[i];
          
          var checkLastCharacter = check[check.length - 1];
        
          if (checkLastCharacter == "s"){
          isPlural = " are "
          }
          else{
          isPlural = " is "
          }
          console.log(check + isPlural + adj)
          }

        /************************************************************* */
        // Refactor the for() loop to be a while loop.


        for(let i=0; i<10; i++) {
            // console.log(" the value of i in the loop is : " + i);
        }

        //your code...
        var i = 0;
            while (i < 10){
            console.log("The value of i in the loop is: " + i);
            i++;
            }



        /************************************************************* */
        //Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
        //use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

        //your code...
        
        function addEquation (i, j){
            var addResult = i + j
            multiplyEquation(addResult)
        }
        function multiplyEquation(i){
            var multiplyResult = i * 20
            var exponentResult = exponentCalc(10)
            divideEquation(multiplyResult, exponentResult)
        }
        function divideEquation(i, j){ 
            var result = i / j
            console.log(result);

        }
        function exponentCalc(i){
            var result = Math.pow(i, 2)
            return result
        }

        addEquation(30,2)

        /************************************************************* */
        //Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values : 

        // ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.

        // 20
        // 0
        // "zero";
        // const zero = 20;
        // null
        // "0"
        // !""
        // {}
        // () => {console.log("hello TEKcamp!");
        // 125
        // undefined
        // ""
  
            const zero = 20;

            function truthyOrFalsy (j) 
            { 
                return j ? "truthy" : "falsy"; 
            } 

            function truthyOrFalsyResults(j){
            return truthyOrFalsy(j) == "truthy" ? "true" : "false";
            }

            function value(j){
            console.log(j + " is " + truthyOrFalsy(j) + ", because " + j + " returns the value of " + truthyOrFalsyResults(j))
            console.log("")
            }

            value(20);
            value(0);
            value("zero");
            value(zero);
            value(null);
            value("")
            value("0");
            value(!"");
            value({});
            value(() => {console.log("hello TEKcamp!");})
            value(125);
            value(undefined);
            value("");

        /************************************************************* */
        // Refactor the following code using a switch statement:
        function day(day){
            switch (day) {
                case "monday":
                    console.log("we got a long week ahead of us...");
                    break;
                case "tuesday":
                    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
                    break;
                case "wednesday":
                    console.log("We are smack dab in the middle of the week");
                    break;
                case "thursday":
                    console.log("Thursday night... the mood is right");
                    break;
                case "friday":
                    console.log("TGIF.  Friday truly is the best day of the week!")
                    break;
                default:
                    console.log("It's a weekend!")
                    break;

            }
        }
        day("friday");

        /************************************************************* */
        // Refactor the following statements to use ternary expressions:

        // const age = 10;
        // if (age > 21) console.log("adult"); else {
        //     console.log("minor");
        // }

        // if (age > 13 && age < 19) console.log('teen'); else {
        //     console.log("not a teenager");
        // };

        // if (age > 65) console.log("retired"); else {
        //     console.log("still working...");
        // }

        function ternaryExpression(){
            let age = 10;
            age > 21 ? console.log("adult") : console.log("minor");
            age > 13 && age < 19 ? console.log('teen') : console.log("not a teenager");
            age > 65 ? console.log("retired") : console.log("still working...");

        }
        ternaryExpression();
        /************************************************************* */
        //Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
        /*
        -name
        -age
        -gender
        -healthy ? (yes or no)
        -hobbies
        -profession
        -education

        -add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  The learn method should print the value of the name property using the 'this' keyword.

        -add another method on your object of any action you want to perform, using some property that exists on your object.  Make sure to reference any properties on your objedct using the 'this' keyword.
        */

        //your code...

        var juanNunez = {
            name : "Juan Nunez",
            age : 31,
            gender : "Male",
            healthy : "No",
            hobbies : "Fishing and hunting",
            profession : "Coding student",
            education : "Bachelor's Degree",

            learn : function(){
                return this.name + " is learning JavaScript";
            },
            love : function(){
                return this.healthy + ", I love food too much!";
            }
        }
        console.log(juanNunez.learn());
        console.log(juanNunez.love());


        /************************************************************* */

        {
            const year = 2021;
            const nums = [1,2,3,4,5];
            let sum = 0;
            let i = 0;
            const doubled = [];

            //Refactor the following statements into expressions


            // 1.
            // if(year > 2000 && year < 2100) {
            //     console.log("welcome to the 21st century");
            
            year > 2000 && year < 2100 ? console.log("welcome to the 21st century") : "You're not in the 21st century";
        
            //2.
            // for(let i=0; i<nums.length; i++) {
            //     sum += nums[i];
            // }
            // console.log(sum);
            sum = nums.reduce((i, j) => i + j, 0);
            console.log(sum);

            
            // 3.
            // while(i < nums.length) {
            //     doubled.push(nums[i]*2);
            //     i++;
            // }
            
            // console.log(doubled);

           
                nums.forEach((j) => doubled.push(j * 2));
                console.log(doubled);
        }


        /************************************************************* */
        // Use array methods to solve the following problems.

        const nums = [1,2,3,4,5];
        // Square every number in the array.  Store the squares in a new array.
        
        //your code...
        const squaredNums = nums.map(n => n*n);
        console.log(squaredNums);

        const fivePlus = [1,3,5,7,9,1,3,5,2,3,1,23,4,232,3,4,1,2,2,2,3,4,4,1,12,11,23,3,4,5];
        //Remove all numbers that are less than 5.  Store the results in a new array.

        //your code...
        const greaterThanFive = fivePlus.filter(fivePlus => fivePlus > 5);
        console.log(greaterThanFive);

        // Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.

        //your code...

        const randomNums = [];
        for (let i = 0; i < 20; i++) {
                let randomNum = Math.floor(Math.random() * 10 + 10);
                randomNums.push(randomNum);
                console.log(randomNums);
        }
        console.log(randomNums.reduce((i, j) => i + j, 0));




        const showNums = [12,22,33,44,55,66,77,88,99,101];
        //Print out the value of each number divided by 2.  There is no need to store the output in an array.
        showNums.forEach(showNums => console.log(showNums / 2));


        /************************************************************* */
        /* Chess pieces have point values associated with them.  

        Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

        Write a function that calculates the total point value of any given input list of Chess pieces.  
        ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

        If there are invalid chess pieces, discard those elements.
        ex : ['iPhone','queen','pawn'] => chessCalc() => 10
        ['android'] => chessCalc() => null

        */

       function chessCalc(pieces) {
        //your code here
        const valueOfPieces = { 'pawn': 1, 
        'bishop': 3, 
        'knight': 3, 
        'rook': 5,
        'queen': 9 };
        return pieces   
            .filter(piece => valueOfPieces[piece])
            .reduce((total, piece) => total + valueOfPieces[piece], 0);
    }

    console.log(chessCalc(['king','queen','pawn','pawn','pawn','bishop']));




        /************************************************************* */

        const ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
        //reverse the array, without modifying / `mutating` the ones array.
        // ones.sort()
        const reversedArray = [];
        for (let i = ones.length - 1; i > -1; i--) {
        reversedArray.push(ones[i]);
        }
        console.log(reversedArray);



        /************************************************************* */
        //create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.

        function cb(age) {
            return `I am ${age} years old.`;
          }
          
          function performer(cb) {
            return cb("31");
          }
          console.log(performer(cb));


        /************************************************************* */
        // For the given list of developers : 
        const devs = [
            {
                name: 'Cameron',
                age: 23,
                gender: 'm',
                "tech_stack" : ['html','css','js','React']
            },
            {
                name: 'Liz',
                age: 20,
                gender: 'f',
                "tech_stack" : ['java','spring-boot','MySql']
            },
            {
                name: 'Chris',
                age: 102,
                gender: 'm',
                "tech_stack" : ['react','express','python']
            },
            {
                name: 'Rashid',
                age: 27,
                gender: 'm',
                "tech_stack" : ['thymeleaf','postgres','js','Angular']
            },
            {
                name: 'Annie',
                age: 30,
                gender: 'F',
                "tech_stack" : ['html','scss','less','DynamoDB','GraphQL']
            },
            {
                name: 'Dr. Patel',
                age: 52,
                gender: 'M',
                "tech_stack" : null
            },
            {
                name: 'Isaiah',
                age: 48,
                gender: 'M',
                "tech_stack" : ['Java','','less','DynamoDB','GraphQL']
            },
            {
                name: 'Saima',
                age: 33,
                gender: 'F',
                "tech_stack" : ['MongoDB','Route53','Jenkins','Terraform','Kubernetes']
            },
            {
                name: 'Omar',
                age: 33,
                gender: 'm',
                "tech_stack" : ['c++']
            },
            {
                name: 'Mariam',
                age: 32,
                gender: 'f',
                "tech_stack" : null
            },
        ];

        /************************** */  
        // Find all devs older than 24

        //your code here...
        let devsAge = devs.filter(i => i.age > 24)
        console.log("Devs older than 24:", devsAge);
        /************************** */  
        // Remove all people who are not developers (i.e. no tech stack)

        //your code here...
        let notDev = devs.filter(i => i.tech_stack === null)

        console.log("Are devs", devs);


        /************************** */  
        // Calculate the total age of all the devs

        const sumDevAge = devs.reduce((total, {age}) => total + age, 0)
        console.log('Sum of age: ', sumDevAge);


        /************************** */  
        // Find all female devs

        //your code here...
        let fGender = devs.filter(f => f.gender === "f" || f.gender === "F")
        console.log("Female Devs", fGender);

        /************************** */  
        // lowercase the genders of every dev

        //your code here...

        let fGenderToLower = devs.filter(f => f.gender.toLowerCase() === "f")
        let mGenderToLower = devs.filter(m => m.gender.toLowerCase() === "m")

        console.log("Female Devs using .toLowerCase", fGenderToLower);
        console.log("male Devs using .toLowerCase", mGenderToLower);

        /************************** */  
        // Sort the developers by name

        //your code here

        /************************** */  
        // Sort the devs by age in descending order

        const devsDescendingAge = devs.sort((i,j) => i.age - j.age);
        console.log("Devs by descending order by age: ",devsDescendingAge);


        /************************** */  
        // Sort the male coders by age

        const maleDevsByAge = devs
            .filter(({gender}) => gender == 'm')
            .sort((i,j) => i.age - j.age);
        console.log("male coders by age: ", maleDevsByAge);

        /************************** */  
        // For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below : 

        /*
        Liz specializes in Java, Spring Boot, and MySql.
        Chris specializes in React, Express, and Python.
        Dr. Patel is not a developer.
        */

       devs.forEach((dev) => {
        if (!dev.tech_stack) {
          console.log(dev.name + " is not a developer.");
        } else {
          console.log(dev.name + " specializes in " + dev.tech_stack);
        }
      });


        /************************************************************* */
        // Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
        const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:"val"},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

        function maxNumber(numbers){
            let filter = numbers.filter(numbers => parseInt(numbers) == numbers)
            filter.pop()
            
            let textNumbers = [0, 1 ,2, 3, 3];
            let gotNumbers = [...filter, ...textNumbers]
          
            return gotNumbers
          }
          console.log(maxNumber(numbersMixed))

        //After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  Allow the function to sort the array in descending order as well.

        function sortNums(numbersMixed,desc=false) {

            sortNums = numbersMixed => numbersMixed.sort()
            
            console.log(sortNums())        
        };



        /************************************************************* */
        //Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.

// arrow function for es6+
// es5 syntax
    function helloWorld() {
        console.log('HELLO WORLD!!');
    }
    helloWorld();
  // VS
  // es6+
    const helloWorld = () => console.log('HELLO WORLD!!');
    helloWorld();

    // This function is useful because it makes the code much cleaner and it's faster than the es5 way.


        /************************************************************* */
        //Add an example of the 5 primary JavaScript data types to the given mapObj.  The key is an example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

        const mapObj = new Map();
        mapObj.set({company : "TEKsystems"},"object");

        console.log(mapObj.has({company : "TEKsystems"}));

        //The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.

        const mapObj = new Map();
        mapObj.set(company = {
            name : "TEKsystems",
            location : "online"
        },"object");
        mapObj.set(1 == 1, "bool")
        mapObj.set(null, "null")
        mapObj.set("Bananas", "string")
        mapObj.set(4657, "number")
        
        console.log(mapObj.has(null)); 
        console.log("was not rendered properly")
        

        //loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']
        const newArray =[];
            for (const [key, value] of mapObj.entries()) {
            newArray.push(value)
            }   
        console.log(newArray)

        /************************************************************* */
        //Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly selects one of the mathematical operations whenever it is invoked.  The doMath() function should print to the console the mathetmatical function that was carried out.  The doMath() function should return the computed value of any operation performed.

        // ex : 2,3 => doMath(2,3) => adding : 5

const a = 21
const b = 8
        
const operations = [

  function addNums() {
                  return a + b;
                },

  function subtractNums(){
                  return a - b;
                },

  function multiplyNums(){
                    return a * b;
                  },

  function divisionNums(){
                    return a / b;
                  }
]

doMath();        


        /************************************************************* */
        //- Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that accepts another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

        function multiple(x){
            function fn(y) {
              return x * y;
            };
            return fn;
            }
            
            let threes = multiple(3);
            console.log(threes(3))


        //- Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.


        // Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

        //your code... 

        const stockValue = 29;
        const stockIncrease = stockGain(stockValue);
        const r = 0.05;
        
        function stockGain(basis){
          return yrs => yrs * basis * r;
        }
        
        console.log(stockIncrease(3))
         
        const futureValue = stockValue + stockIncrease(3);
        
        console.log(futureValue)

        



// DO NOT DELETE THIS EXPORT
module.exports = {
    tekCamp,
    canVote
}


//*************************************** */


