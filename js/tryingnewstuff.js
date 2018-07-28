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

//an array of strings; eventually i want these string to become objects.  
let states = ["Delaware the string", "Pennsylvania the string", "more states"];

//forEach is a method specifically for arrays. If you ever get an error that says forEach is not a function, it may mean that the thing in front of the forEach() is not an array
states.forEach(xxxxx => {
    //this loop will run as many times as there are states (eventually, as i add more states, 50 times) and each time it will add a xxxxx to union.states via the union.addState() method
    union.addState(xxxxx);
})

//I am console logging the object to make sure the states were added
console.log(union);


// Template below based off of Meg's version from above
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

console.log(createDelaware);
console.log(createPennsylvania);