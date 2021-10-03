console.log('hello')

// good practice to wrap our fetch request in a function
// fetch request for clinics
// when info gets sent over the internet it gets turned into a string so we have to jsonify again
// add an eventListener here to our form - we will listen for submit because we want our form to create something
// I do this listening for the submit by creating a function - here we will call it handleSubmit


form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    // first thing I want to do here is prevent default b/c the form will automatically try to send a post request
    // we want to prevent the post request from happening b/c the post request refreshes the pg. - we don't want page refreshed

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

