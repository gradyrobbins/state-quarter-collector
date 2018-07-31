console.log("Trying new stuff.js");

//object.create is a powerful way to make an object. It gives us freedom to decide how the object is used and whether or not it's properties can be reassigned. All additonal properties (enumerable, writeable, configurable) are all default FALSE. This can be a problem if we are trying to iterate over the object with a for in loop if we forget to change the value of enumerable to TRUE. 
//the 'this' key word in the addState() method is looking within the object for a xxxxx key

let union = Object.create(null, {
    name: {
        value: "Union of the 50 states",
        enumerable: true
    },
    capital: {
        value: "Washington D.C.",
        enumerable: true
    },
    states: {
        value: [],
        writeable: true,
        enumerable: true
    },
    addState: {
        value: function(xxxxx){
            this.states.push(xxxxx);
        }
    }
});






//forEach is a method specifically for arrays. If you ever get an error that says forEach is not a function, it may mean that the thing in front of the forEach() is not an array
// states.forEach(xxxxx => {
    //this loop will run as many times as there are states (eventually, as i add more states, 50 times) and each time it will add a xxxxx to union.states via the union.addState() method
//     union.addState(xxxxx);
// })


const createDelaware = Object.create(null, {
    name: {
        value: "Delaware",
        enumerable: true
    },
    dateOfStatehood: {
        value: "December 7, 1787",
        writeable: true,
        enumerable: true
    },
    capital: {
        value: "Dover",
        writeable: true,
        enumerable: true
    },
    nicknames: {
        value: "First State, Diamond State",
        writeable: true,
        enumerable: true
    },
    motto: {
        value: "Liberty and Independence",
        writeable: true,
        enumerable: true
    },
    stateFlower: {
        value: "Peach Blossom",
        writeable: true,
        enumerable: true
    },
    stateBird: {
        value: "Blue hen chicken",
        writeable: true,
        enumerable: true
    },

});


let createPennsylvania = Object.create(null, {
    name: {
        value: "Pennsylvania",
        writeable: true,
        enumerable: true
    },
    dateOfStatehood: {
        value: "December 12, 1787",
        writeable: true,
        enumerable: true
    },
    capital: {
        value: "Harrisburg",
        writeable: true,
        enumerable: true
    },
    nicknames: {
        value: "Keystone State",
        writeable: true,
        enumerable: true
    },
    motto: {
        value: "Virtue, Liberty and Independence",
        writeable: true,
        enumerable: true
    },
    stateFlower: {
        value: "Mountain Laurel",
        writeable: true,
        enumerable: true
    },
    stateBird: {
        value: "Ruffed Goose",
        writeable: true,
        enumerable: true
    },

});  




let createNewJersey = Object.create(null, {
    name: {
        value: "New Jersey",
        writeable: true,
        enumerable: true
    },
    dateOfStatehood: {
        value: "December 18, 1787",
        writeable: true,
        enumerable: true
    },
    capital: {
        value: "Trenton",
        writeable: true,
        enumerable: true
    },
    nicknames: {
        value: "Garden State",
        writeable: true,
        enumerable: true
    },
    motto: {
        value: "Liberty and Prosperity",
        writeable: true,
        enumerable: true
    },
    stateFlower: {
        value: "Purple Violet",
        writeable: true,
        enumerable: true
    },
    stateBird: {
        value: "Eastern Goldfinch",
        writeable: true,
        enumerable: true
    },

});

let createGeorgia = Object.create(null, {
    name: {
        value: "Georgia",
        writeable: true,
        enumerable: true
    },
    dateOfStatehood: {
        value: "January 2, 1788",
        writeable: true,
        enumerable: true
    },
    capital: {
        value: "Atlanta",
        writeable: true,
        enumerable: true
    },
    nicknames: {
        value: "The Peach State, Empire State of the South",
        writeable: true,
        enumerable: true
    },
    motto: {
        value: "Wisdom, Justice, and Moderation",
        writeable: true,
        enumerable: true
    },
    stateFlower: {
        value: "Cherokee rose",
        writeable: true,
        enumerable: true
    },
    stateBird: {
        value: "Brown thrasher",
        writeable: true,
        enumerable: true
    },

});

let createConnecticut = Object.create(null, {
    name: {
        value: "Connecticut",
        writeable: true,
        enumerable: true
    },
    dateOfStatehood: {
        value: "January 9, 1788",
        writeable: true,
        enumerable: true
    },
    capital: {
        value: "Hartford",
        writeable: true,
        enumerable: true
    },
    nicknames: {
        value: "Nutmeg State, Constitution State",
        writeable: true,
        enumerable: true
    },
    motto: {
        value: "Qui Transtulit Sustinet (He who transplanted still sustains",
        writeable: true,
        enumerable: true
    },
    stateFlower: {
        value: "Mountain Laurel",
        writeable: true,
        enumerable: true
    },
    stateBird: {
        value: "American Robin",
        writeable: true,
        enumerable: true
    },

});


let createMassachusetts = Object.create(null, {
    name: {
        value: "Massachusetts",
        writeable: true,
        enumerable: true
    },
    dateOfStatehood: {
        value: "February 6, 1788",
        writeable: true,
        enumerable: true
    },
    capital: {
        value: "Boston",
        writeable: true,
        enumerable: true
    },
    nicknames: {
        value: "Bay State",
        writeable: true,
        enumerable: true
    },
    motto: {
        value: "Ense Petit Placidam Sub Libertate Quietem (By the sword we seek peace, but peace only under liberty)",
        writeable: true,
        enumerable: true
    },
    stateFlower: {
        value: "Mayflower",
        writeable: true,
        enumerable: true
    },
    stateBird: {
        value: "Chickadee",
        writeable: true,
        enumerable: true
    },

});


let createMaryland = Object.create(null, {
    name: {
        value: "Maryland",
        writeable: true,
        enumerable: true
    },
    dateOfStatehood: {
        value: "April 28, 1788",
        writeable: true,
        enumerable: true
    },
    capital: {
        value: "Annapolis",
        writeable: true,
        enumerable: true
    },
    nicknames: {
        value: "Old Line State, Free State",
        writeable: true,
        enumerable: true
    },
    motto: {
        value: "Fatti Maschii, Parole Femine (Manly Deeds, Womanly Words)",
        writeable: true,
        enumerable: true
    },
    stateFlower: {
        value: "Black-eyed Susan",
        writeable: true,
        enumerable: true
    },
    stateBird: {
        value: "Baltimore Oriole",
        writeable: true,
        enumerable: true
    },

});



let createSouthCarolina = Object.create(null, {
    name: {
        value: "South Carolina",
        writeable: true,
        enumerable: true
    },
    dateOfStatehood: {
        value: "May 23, 1788",
        writeable: true,
        enumerable: true
    },
    capital: {
        value: "Columbia",
        writeable: true,
        enumerable: true
    },
    nicknames: {
        value: "Palmetto State",
        writeable: true,
        enumerable: true
    },
    motto: {
        value: "Dum Spiro Spero (While I breathe, I hope)",
        writeable: true,
        enumerable: true
    },
    stateFlower: {
        value: "Yellow jessamine",
        writeable: true,
        enumerable: true
    },
    stateBird: {
        value: "Carolina wren",
        writeable: true,
        enumerable: true
    },

});


let createNewHampshire = Object.create(null, {
    name: {
        value: "New Hampshire",
        writeable: true,
        enumerable: true
    },
    dateOfStatehood: {
        value: "June 21, 1788",
        writeable: true,
        enumerable: true
    },
    capital: {
        value: "Concord",
        writeable: true,
        enumerable: true
    },
    nicknames: {
        value: "Granite State",
        writeable: true,
        enumerable: true
    },
    motto: {
        value: "Live free or die",
        writeable: true,
        enumerable: true
    },
    stateFlower: {
        value: "Purple lilac",
        writeable: true,
        enumerable: true
    },
    stateBird: {
        value: "Purple finch",
        writeable: true,
        enumerable: true
    },

});



let createVirginia = Object.create(null, {
    name: {
        value: "Virginia",
        writeable: true,
        enumerable: true
    },
    dateOfStatehood: {
        value: "June 25, 1788",
        writeable: true,
        enumerable: true
    },
    capital: {
        value: "Richmond",
        writeable: true,
        enumerable: true
    },
    nicknames: {
        value: "Mother of States",
        writeable: true,
        enumerable: true
    },
    motto: {
        value: "Sic Semper Tyrannis (Thus always to tyrants)",
        writeable: true,
        enumerable: true
    },
    stateFlower: {
        value: "Dogwood",
        writeable: true,
        enumerable: true
    },
    stateBird: {
        value: "Cardinal",
        writeable: true,
        enumerable: true
    },

});


let states = [];

states.push(createDelaware, createPennsylvania, createNewJersey, createGeorgia, createConnecticut, createMassachusetts, createMaryland, createSouthCarolina, createNewHampshire, createVirginia);


//forEach is a method specifically for arrays. If you ever get an error that says forEach is not a function, it may mean that the thing in front of the forEach() is not an array
states.forEach(state => {
    // this loop will run as many times as there are states (eventually, as i add more states, 50 times) and each time it will add a state to union.states via the union.addState() method
    union.addState(state);
})

console.log(union.states);

