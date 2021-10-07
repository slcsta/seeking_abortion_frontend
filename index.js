const port = 'http://localhost:3000'
const stateCall = new StateApi(port);
const clinicApi = new ClinicApi(port);
const ul = document.getElementById('clinic-list');
const form = document.getElementById('clinic-form');
const dropDown = document.getElementById('state-dropdown');
const nameInput = document.getElementById('clinic-name');
const addressInput = document.getElementById('clinic-address');
const cityInput = document.getElementById('clinic-city');
const zip_codeInput = document.getElementById('clinic-zip_code');
const phone_numberInput = document.getElementById('clinic-phone_number');
const state_idInput = document.getElementById('state_id')
const baseURL = 'http://localhost:3000/clinics'
form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault();
    clinicApi.createClinics();
    event.target.reset()
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
stateCall.getStates()

