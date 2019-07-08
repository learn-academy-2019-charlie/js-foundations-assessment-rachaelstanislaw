// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

    var oddNumber = function (){
       if(num % 3 === "0"){
           return `${num} is divisible by three`
       } else {
           return `${num} is not divisible by three`
       }
    }
    
// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.

    var helloMe = {
        first_name: "Rachael
        last_name: "Stanislaw"
        age: 26
        pet_name: "Raisins"
    }
    
    description = () =>{
        return `My name is ${this.first_name} ${this.last_name}. I am ${this.age} years old and I have a cat named ${this.pet_name}!`
    }
    
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

    var groceryArr = ["bread", "peanuts", "liver", "oreos", "cream soda"]
    
    const findIndexes = (arr) =>{
        let newArr = []
        newArr.push(arr[0],arr[2],arr[4])
        return newArr.join(', ')
    }
    
    console.log(findIndexes(groceryArr));
    
    
// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

    var word = "learn"
        const alphbetSoup = (str) =>{
        let newArr = str.split('').sort()
        return newArr
    }
    
    console.log(alphbetSoup(word));

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

    var nums = [9, 5, 88, 2, 5, 42, 57]

    var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

// output should be: "9 ducks", etc

    const animalNums = (arr1,arr2) => {
    var newArr = []
        for(let i=0;i<arr1.length;i++){
            console.log(arr1[i]);
            console.log(arr2[i]);
            newArr.push(`${arr1[i]} ${arr2[i]}`)
        }
        return newArr
    }
console.log(animalNums(nums,nouns));

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
    var numbers = [1,2,3,4,5]
    const mult5 = (arr) =>{
        var newArr = []
        for(let i=0;i<arr.length;i++){
            newArr.push(arr[i]*5)
        }
        return newArr
    }
    console.log(mult5(numbers));
