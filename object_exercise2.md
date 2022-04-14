# Exercise Arrays and Objects

1. We use penguins from Wikipedia's List of Fictional Penguins and create an objects with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author)

[List of fictional penguins - Wikipedia](https://en.wikipedia.org/wiki/List_of_fictional_penguins).

```js
var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  },
};
var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerte.");
  },
};
var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  },
};
```

---

2. Create a new variable named penguins and set it equal to an array that lists these three penguins! (Hint: remember you can put variable names inside an array, not just hard-coded values! And remember that variable names don't have quotes around them.)

---

3. Access the first penguin in the list and print it to the console using console.log() -- notice that you can see all the properties and methods of that object listed in the console! (Hint: remember that array indexes start counting at 0, not 1!)

---

4. Create a new variable called secondPenguin and set it equal to the second penguin in your penguins array.

---

5. Print to the console the name of the last penguin in the list.

---

6. Remember the penguin you created earlier, with the variable name of myPenguin? Add that penguin to the end of the penguins array!

---

7. Print the length of the penguins array to the console.

---

8. Write one more line of code to change the first penguin's canFly property to the value true (overriding its existing value).

---

9. Call the sayHello method of the first penguin in your penguins array!

---

10. Write a for loop to iterate through every penguin in the array and print the value of each penguin's name property to the console.

---

11. Write a for loop to call the sayHello method of every penguin in the array!

---

12. Write a for loop to iterate through every penguin in the array, and add a new property to each penguin called numberOfFeet with the value 2

---

13. Write another for loop to iterate through every penguin in the array, and for each penguin that can fly, print to the console a message containing the penguin's name and " can fly!" -- for example, "Gunter can fly!" or "Ramón can fly!" (Don't do anything for the penguins that cannot fly.)

---

14. Use forEach() to do the same as 12.

---

15. Use filter() to get ack the object for "Gunter".

---