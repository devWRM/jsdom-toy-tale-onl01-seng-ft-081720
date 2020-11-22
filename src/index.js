let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");

  addBtn.addEventListener("click", () => {
    // hide & seek with the form by repeatedly re-assigning addToy to true then false

    addToy = !addToy;
    if (addToy) {
      // TRUE Reveals underlying form with "block"
      toyFormContainer.style.display = "block";
    } else {
      // FALSE Conceals underlying form with "none"
      toyFormContainer.style.display = "none";
    }

  });


// FETCH resource:  https://learn.co/tracks/online-software-engineering-structured/front-end-web-programming/communication-with-the-server/use-fetch

// The getAllToys function is a GET request
  function getAllToys() {
    // console.log("This is the get all toys function.")   //  <= call function to test this code which confirms the function works


// Make a 'GET' request to fetch all the toy objects
// Where ever getAllToys() is called will get a json object
//  - Reference Dog CEO Challenge
    return fetch("http://localhost:3000/toys")
      .then(function(response) {
        return response.json();
      })
      .then(function(json){

        // console.log(json)   //  <= test to see if json object was retrieved
        // console.log(json[0])   //  <= test to see if json object was retrieved
        // console.log(json[0]["id"])   //  <= test to see if json object was retrieved
        console.log(json[0]["name"])   //  <= test to see if json object was retrieved
        // console.log(json[0]["image"])   //  <= test to see if json object was retrieved
        // console.log(json[0]["likes"])   //  <= test to see if json object was retrieved
        
        // return json
        buildBrowserToyCollection(json)
    })

// Fetch gets the data from the URL server address and returns it as a response
// The fetched response is passed into a function that converts the response to usable JSON
// The JSON is passed into a function that can now manipulate the DOM in the browser

  }

    getAllToys()    //  <= function call to test the GET request function





function buildBrowserToyCollection(jsonToysList) {

// debugger;

  // console.log(jsonToysList)   //  <= test to make sure the json object (jsonToysList) was passed in
  // console.log(jsonToysList[0]["name"])  //  <= test to make sure the json object (jsonToysList) was passed in


    
    let toyCollection = document.getElementById("toy-collection")

  // Appending Reference:  https://learn.co/tracks/online-software-engineering-structured/front-end-web-programming/manipulating-the-dom/removing-altering-and-inserting-html-lab 
  // Can use for...of OR forEach
  for (const toy of jsonToysList) {
    let card = document.createElement("div")
    card.innerHTML = `<h2>${toy["name"]}</h2><img src= "${toy["image"]}" class = "toy-avatar" alt = "${toy["name"]}-image"><p>LIKES = ${toy["likes"]}</p><button class = "like-btn" data-anyname = "like">like <3</button>`


    // card.innerText = toy["id"] + ". " + toy["name"]  <= testing
    toyCollection.appendChild(card)



// IMG example:   <img src="https://media.giphy.com/media/3o6MbkZSYy4mI3gLYc/giphy.gif" alt="A policeman">


  }


//   for (const element of array) {
//     console.log(element);
// }



// TEST:  Make a <div class="card"> for each toy and add it to the toy-collection div
    // let card = document.createElement("div")
    // card.innerText = "I'm alive!!!"
    // let toyCollection = document.getElementById("toy-collection")
    // toyCollection.appendChild(card)

}

  // buildBrowserToyCollection(getAllToys)   //  <= function call to test function






});


// document.addEventListener('DOMContentLoaded', function() {
//   fetchImages()
//   fetchDogBreeds()
// })

