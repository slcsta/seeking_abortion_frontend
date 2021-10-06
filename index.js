
// good practice to wrap our fetch request in a function
// fetch request for clinics
// when info gets sent over the internet it gets turned into a string so we have to jsonify again
// add an eventListener here to our form - we will listen for submit because we want our form to create something
// I do this listening for the submit by creating a function - here we will call it handleSubmit
const port = 'http://localhost:3000'
const clinicApi = new ClinicApi(port)
const ul = document.getElementById('clinic-list');
const form = document.getElementById('clinic-form');
const dropDown = document.getElementById('state-dropdown');
const nameInput = document.getElementById('clinic-name');
const addressInput = document.getElementById('clinic-address');
const cityInput = document.getElementById('clinic-city');
const zip_codeInput = document.getElementById('clinic-zip_code');
const phone_numberInput = document.getElementById('clinic-phone_number');
const baseURL = 'http://localhost:3000/clinics'
form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    // const clinicInfo = {   // creating an object here of clinic information containing what we want sent over internet to the database
    //     // how do i send these attributes through the internet?
    //     name: nameInput.value,
    //     address: addressInput.value,
    //     city: cityInput.value,
    //     zip_code: zip_codeInput.value,
    //     phone_number: phone_numberInput.value
    // }
    // first thing I want to do here is add prevent default method b/c the form will automatically try to send a post request
    // we want to prevent the post request from happening b/c the post request refreshes the pg. - we don't want page refreshed
    event.preventDefault();
    clinicApi.createClinics();
    event.target.reset()
    // fetch request can take in two args
    // b/c this is a more complicated fetch where we are sending params
    // i want to add a second arg that is an object containing the params that i want to send
    // i can do this by creating a variable for that object that holds those params
    // const configObject = {
    //     method: 'POST', //tell what kind of request this is
    //     headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json"
    //     },
    //     body: JSON.stringify(clinicInfo)       // need to stringify this before sending it
    // }
    // fetch('http://localhost:3000/clinics', configObject)  //creating something new so we want to add a fetch request that will send some info - we are sending params here to create a new item
    // .then(response => response.json())
    // .then(json => renderItem(json["data"]))
}

// function getClinics(){
//     fetch('http://localhost:3000/clinics')
//     .then(response => response.json())
//     .then(data => renderClinics(data))
// }

// function renderClinics(data) {
//     const clinics = data["data"];
//   // look above - variable defined at beginnning - 
// // now that I have my info and where my info will go, i want to make a list item ('li') for each clinic 
// // I do this by iterating through the data array to access each element (clinic)   
//     clinics.forEach((clinic) => {
//         const c = new Clinic({id:clinic.id, ...clinic.attributes})
//         c.renderClinic()

        // const li = document.createElement('li'); //every single iteration has its own scope
        // now I need to take this li and put some "stuff" in it
        // 
        //renderClinic(clinic)
    //})
        // debugger
//}
// and then because we wrapped fetch in a function we need to call it down at the bottom

// function renderClinic(clinic) {
//     const li = document.createElement('li');
//     li.innerHTML = `
//     <div>
//     <span class="name">${clinic["attributes"]["name"]}</span>
//     <span class="address">${clinic["attributes"]["address"]}</span>
//     <span class="city">${clinic["attributes"]["city"]}</span>
//     <span class="zip_code">${clinic["attributes"]["zip_code"]}</span>
//     <span class="phone_number">${clinic["attributes"]["phone_number"]}</span>
//     </div>
//     <button class="edit" data-id= "${clinic.id}">Edit</button>
//     <button class="delete" data-id= "${clinic.id}">Delete</button>
//     `
   // ul.appendChild(li)
    //form.reset() //reset form to be cleared after something is entered
    // going to put event listener on the parent element li instead of on the button child element - b/c it's simpler
    //li.addEventListener('click', handleClick)
//}

// function handleClick(event){
//     if(event.target.innerText === "Delete") {
//         const id = event.target.dataset.id
//         event.target.parentElement.remove()
//         const configObject = {
//             method: 'DELETE' //tell what kind of request this is - don't need headers b/c i'm not adding anything to database - don't need body b/c I'm not sending anything back to frontend   
//         }
//         fetch('http://localhost:3000/clinics' + `/${id}`, configObject)
//         .then(response => response.json())
//         .then(json => alert(json.message))

//     } else if(event.target.innerText === "Edit") {
//         event.target.innerText = "Save"
//         // change inner text of button to save
//         // have an edit form appear with values filled out
//         // change info on backend in db
//         // change info on the frontend (the DOM)
//         createEditFields(event.target)
//     } else if(event.target.innerText === "Save"){
//         event.target.innerText = "Edit"
//     }
// }
// function createEditFields(editBtn){
//     const div = editBtn.previousElementSibling;
//     // Good way to do this is to loop over each element of the div so that we have like 1 form and not multiple forms for each attribute
// }
clinicApi.getClinics()

