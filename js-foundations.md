# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.

    Primitives:
    Number, String, Boolean, Null, Undefined
    
    Other:
    Objects, Symbols, 
    
2. What's the difference between =, ==, and === in JavaScript?

    = is used to proclaim a result
    == is a loose comparison (does type coercion)
    === is a strict comparison (does not do type coercion)
    
3. What is the difference between an array's index and length?

    index starts at position 0 and continues through the length of the array.
    length is the total length of an array.
    
    example:
    ["a","b","c"]
              ^ index 2
    total length of array is 3
    
4. What are the three parts of a for loop?

    1. Sets a variable before the loop starts (var i = 0)
    2. Defines the condition for the loop to run (i< arr . length)
    3  Increases or decreases a value (i++ or i--) each time the code block in the loop has been executed
    
5. What is a function's declaration, argument, and call?

    Declaration: Name of function
    Argument: What data the fuction takes in
    Call: Initiates the fuction
    
6. What are the three main steps in saving work to github?

    git add .
    git commit -m
    git push

7. What is the terminal command to move directories?

    cd
    
8. Do you have a suggestion for a Check In question?

    "If we had a weekly study meetup, would/could you attend?"
    
9. What was your favorite topic this week?

    So far I really like React. I can already tell how powerful it can be.
    
10. What was your "A-ha!" moment this week?

    Calling an array of components into the main App instead of just listing it a bunch of times. Seemed simple but it was very exciting ha.
    
### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```
undefined ?

2. What is JSON? How does it relate to javascript objects?

JSON stands for JavaScript Object Notation. It is a lightweight format for storing and transporting data.
In realtion to objects:
Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays

3. Describe a closure, what is it good for and how do you recognize one?
Global variables can be made local (private) with closures. Makes the variables themselves into anonymous functions ?