// console.log("hello this is all50statesdata.js");


/*
    Single Responsibility Principle
    Two functions:
        1. Factory function for creating states
        2. Function for saving collection of states to localStorage
*/

/*
  Purpose: Creates a single state
  Arguments: Statehood (string), Captial (string), Nicknames (string),
             Motto (string), Flower (string), Bird (string)
  Returns: Object representing an individual state of the union.
*/
// const createState = (Statehood, Capital, Nicknames, Motto, Flower, Bird) => {
//     const individualState = {
//         Statehood: Statehood,
//         Capital: Capital,
//         Nicknames: Nicknames,
//         Motto: Motto,
//         Flower: Flower,
//         Bird: Bird
//     }
  
//     return individualState;
//   }

// /*
//   Purpose: Creates a collection of all states
//   Arguments: none
//   Returns: Array of objects. Each object is a state.
// */

// const stateInfoBuilder = () => {
//     const Delaware = createState(
//         "December 7, 1787",
//         "Dover",
//         "First State, Diamond State",
//         "Liberty and Independence",
//         "Peach Blossom",
//         "Blue hen chicken"
//     )

//     const Pennsylvania = createState(
//         "December 12, 1787",
//         "Harrisburg",
//         "Keystone State",
//         "Virtue, Liberty and Independence",
//         "Mountain Laurel",
//         "Ruffed Goose"
//     )
//     const arrayOfStates = [Delaware, Pennsylvania]
    
//     return arrayOfStates;
// }


/*
  Purpose: Stores all the snack cakes in the browser's local storage
  Arguments: allTheSnackCakes (array) - An array containing all of the snack
      cake objects
  Returns: None
*/
// function populateDB(stateInfoBuilder) {
//     const stringified = JSON.stringify(stateInfoBuilder)
//     localStorage.setItem("state", stringified)
//   }
  

// let items;

// if (localStorage.getItem('state')) {
//     items = JSON.parse(localStorage.getItem('state'));
//     console.log(items);
//     } else {
//     console.log("no data exists in local storage");
//         //items = [];
// }


    // const Delaware = {
    //     Statehood: "December 7, 1787",
    //     Capital: "Dover",
    //     Nicknames: "First State, Diamond State",
    //     Motto:  "Liberty and Independence",
    //     Flower:  "Peach Blossom",
    //     Bird:  "Blue hen chicken"
    // }
    // const Pennsylvania = {
    //     Statehood: "December 12, 1787",
    //     Capital: "Harrisburg",
    //     Nicknames: "Keystone State",
    //     Motto:  "Virtue, Liberty and Independence",
    //     Flower:  "Mountain Laurel",
    //     Bird:  "Ruffed Goose"
    // }
    // const New_Jersey = {
    //     Statehood: "December 18, 1787",
    //     Capital: "Trenton",
    //     Nicknames: "Garden State",
    //     Motto:  "Liberty and Prosperity",
    //     Flower:  "Purple Violet",
    //     Bird:  "Eastern Goldfinch"
    // }
    // const Georgia = {
    //     Statehood: "January 2, 1788",
    //     Capital: "Atlanta",
    //     Nicknames: "The Peach State, Empire State of the South",
    //     Motto:  "Wisdom, Justice, and Moderation",
    //     Flower:  "Cherokee rose",
    //     Bird:  "Brown thrasher"
    // }
    // const Connecticut = {
    //     Statehood: "January 9, 1788",
    //     Capital: "Hartford",
    //     Nicknames: "Nutmeg State, Constitution State",
    //     Motto:  "Qui Transtulit Sustinet (He who transplanted still sustains",
    //     Flower:  "Mountain Laurel",
    //     Bird:  "American Robin"
    // }

    // const Massachusetts = {
    //     Statehood: "February 6, 1788",
    //     Capital: "Boston",
    //     Nicknames: "Bay State",
    //     Motto:  "Ense Petit Placidam Sub Libertate Quietem (By the sword we seek peace, but peace only under liberty)",
    //     Flower:  "Mayflower",
    //     Bird:  "Chickadee"
    // }
    // const Maryland = {
    //     Statehood: "April 28, 1788",
    //     Capital: "Annapolis",
    //     Nicknames: "Old Line State, Free State",
    //     Motto:  "Fatti Maschii, Parole Femine (Manly Deeds, Womanly Words)",
    //     Flower:  "Black-eyed Susan",
    //     Bird:  "Baltimore Oriole"
    // }
    // const South_Carolina = {
    //     Statehood: "May 23, 1788",
    //     Capital: "Columbia",
    //     Nicknames: "Palmetto State",
    //     Motto:  "Dum Spiro Spero (While I breathe, I hope)",
    //     Flower:  "Yellow jessamine",
    //     Bird:  "Carolina wren"
    // }
    // const New_Hampshire = {
    //     Statehood: "June 21, 1788",
    //     Capital: "Concord",
    //     Nicknames: "Granite State",
    //     Motto:  "Live free or die",
    //     Flower:  "Purple lilac",
    //     Bird:  "Purple finch"
    // }
    // const Virginia = {
    //     Statehood: "June 25, 1788",
    //     Capital: "Richmond",
    //     Nicknames: "Sic Semper Tyrannis (Thus always to tyrants)",
    //     Motto:  "Liberty and Independence",
    //     Flower:  "Dogwood",
    //     Bird:  "Cardinal"
    // }
