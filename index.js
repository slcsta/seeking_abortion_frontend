console.log('hello')

// good practice to wrap our fetch request in a function
// fetch request for clinics
// when info gets sent over the internet it gets turned into a string so we have to jsonify again
// add an eventListener here to our form - we will listen for submit because we want our form to create something
// I do this listening for the submit by creating a function - here we will call it handleSubmit
const nameInput = document.getElementById('item-name');
const addressInput = document.getElementById('item-address');
const cityInput = document.getElementById('item-city');
const zip_codeInput = document.getElementById('item-zip_code');
const phone_numberInput = document.getElementById('item-phone_number');

form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    const clinicInfo = {   // creating an object here of clinic information containing what we want sent over internet to the database
        // how do i send these attributes through the internet?
        name: nameInput.value,
        address: addressInput.value,
        city: cityInput.value,
        zip_code: zip_codeInput.value,
        phone_number: phone_numberInput.value
    }
    // first thing I want to do here is add prevent default method b/c the form will automatically try to send a post request
    // we want to prevent the post request from happening b/c the post request refreshes the pg. - we don't want page refreshed
    event.preventDefault();
    // fetch request can take in two args
    // b/c this is a more complicated fetch where we are sending params
    // i want to add a second arg that is an object containing the params that i want to send
    // i can do this by creating a variable for that object that holds those params
    const configObject = {
        method: 'POST', //tell what kind of request this is
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(clinicInfo)       // need to stringify this before sending it
    }
    fetch('http://localhost:3000/clinics', configObject)  //creating something new so we want to add a fetch request that will send some info - we are sending params here to create a new item
    .then(response => response.json())
    .then(json => {debugger})
}

function getClinics(){
    fetch('http://localhost:3000/clinics')
    .then(response => response.json())
    .then(data => renderClinics(data))
}

function renderClinics(data) {
    const clinics = data["data"];
    const ul = document.getElementById('clinic-list');
// now that I have my info and where my info will go, i want to make a list item ('li') for each clinic 
// I do this by iterating through the data array to access each element (clinic)   
    clinics.forEach((clinic) => {
        const li = document.createElement('li'); //every single iteration has its own scope
        // now I need to take this li and put some "stuff" in it
        li.innerText = `${clinic["attributes"]["name"]} - ${clinic["attributes"]["address"]} - ${clinic["attributes"]["city"]} - ${clinic["attributes"]["zip_code"]} - ${clinic["attributes"]["phone_number"]}`
        ul.appendChild(li)
    })
        // debugger
}


// and then because we wrapped fetch in a function we need to call it down at the bottom

getClinics()

