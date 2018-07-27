console.log("hello world dom.js")

// Get a reference to the populate database button in the DOM
const populateButton = document.querySelector("#populateDatabase")
const retrieveButton = document.querySelector("#retrieveDatabase")

/*
    When the user clicks the button, populate the database with
    State information
*/
populateButton.addEventListener("click", function () {
    const allStates = stateInfoBuilder()
    populateDB(allStates)
    
})

retrieveButton.addEventListener("click", function () {
    localStorage.getItem("state")
    JSON.parse(stateInfoBuilder)

})
