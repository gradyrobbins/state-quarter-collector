console.log("hello world dom.js")



/////////////WRITING TO THE DOM VIA DOCUMENT.CREATEELEMENT

//target a place on the DOM to insert the built up fragment
let output = document.getElementById("output");

//create a fragment. This is going to act as a container for the elements I am about to create. Instead of inserting an element each time I make one, I am going to append them each to the fragment and then only touch the DOM once by appending the fragment at the end
let fragment = document.createDocumentFragment();

//create a <h1></h1> tag, assign it's text to be 'Union of the 50 states', and start to build up the fragment
let title = document.createElement("H1");
title.textContent = union.name;
fragment.appendChild(title);


//create a <h2></h2> tag, assign it's text to be 'capital: Washington D.C.', and continue to build up the fragment
let unionCapital = document.createElement("H2");
unionCapital.textContent = union.location;
fragment.appendChild(unionCapital);

//finally, now that I have a fragment built with two elements in it, I am going to append it to the DOM
output.appendChild(fragment);



//target a place on the DOM to insert the built up fragment
let output2 = document.getElementById("output2");

//create a fragment. This is going to act as a container for the elements I am about to create. Instead of inserting an element each time I make one, I am going to append them each to the fragment and then only touch the DOM once by appending the fragment at the end
let fragment2 = document.createDocumentFragment();

//create a <h1></h1> tag, assign it's text to be 'trying new stuff', and start to build up the fragment
let title2 = document.createElement("H1");
title2.textContent = "trying new stuff";
fragment.appendChild(title2);


//create a <h2></h2> tag, assign it's text to be 'capital: Washington D.C.', and continue to build up the fragment
let delawareCapital = document.createElement("H2");
delawareCapital.textContent = createDelaware.capital;
fragment.appendChild(delawareCapital);

//finally, now that I have a fragment built with two elements in it, I am going to append it to the DOM
output2.appendChild(fragment);
