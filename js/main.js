console.log("Helloworld this is main.js")

/*
    Single Responsibility Principle
    Two functions:
        1. Factory function for creating snack cakes
        2. Function for saving collection of cackes to localStorage
*/
const keyCriticalPointsByWeekFourofNSS = [
  "Proper variable naming",
  "Data structures",
  "Objects, keys, values",
  "Functions and their purpose",
  "Function arguments and how to use them",
  "Event listeners - Responding to user interaction in the browser"
]

/*
  Purpose: Creates a single snack cakes
  Arguments: title (string), description (string), amount (integer),
             topping (string), flavor (string), weight (integer [grams])
  Returns: Object representing a snack cake.
*/
const createSnackCake = (title, description, amount, topping, flavor, weight) => {
  const snackCake = {
      title: title,
      description: description,
      amount: amount,
      topping: topping,
      flavor: flavor,
      weight: weight
  }

  return snackCake
}

/*
  Purpose: Creates a collection of all snack cakes we are selling
  Arguments: none
  Returns: Array of objects. Each object is a snack cake.
*/
const makeAllTheCakes = () => {
  const cosmicBrownies = createSnackCake("Cosmic Brownies",
      "Delicious Chocolate Brownies",
      12,
      "Candy coated chocolate nuggets",
      "Chocolate",
      372
  )

  const easterEggBrownies = createSnackCake("Easter Egg Brownies",
      "Deviled egg looking brownie snacks",
      6,
      "Frosting",
      "Chocolate",
      261
  )

  const snackCakes = [cosmicBrownies, easterEggBrownies]

  return snackCakes
}

/*
  Purpose: Stores all the snack cakes in the browser's local storage
  Arguments: allTheSnackCakes (array) - An array containing all of the snack
      cake objects
  Returns: None
*/
function populateDB(allTheSnackCakes) {
  const stringified = JSON.stringify(allTheSnackCakes)
  localStorage.setItem("snackCakes", stringified)
}
