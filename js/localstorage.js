// console.log("Hello from localstorage.js");




//basically just copy/pasta code block from the homeinventory instructions of client-side-mastery
const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)
  
    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
  }

saveDatabase(createDelaware, "Delaware");
saveDatabase(createPennsylvania, "Pennsylvania");
saveDatabase(createNewJersey, "New Jersey");
saveDatabase(createGeorgia, "Georgia");
saveDatabase(createConnecticut, "Connecticut");
saveDatabase(createMassachusetts, "Massachusetts");
saveDatabase(createMaryland, "Maryland");
saveDatabase(createSouthCarolina, "South Carolina");
saveDatabase(createNewHampshire, "New Hampshire");
saveDatabase(createVirginia, "Virginia");
