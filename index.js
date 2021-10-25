const port = 'http://localhost:3000';
const stateCall = new StateApi(port);
const clinicApi = new ClinicApi(port);
//const ul = document.getElementById('clinic-list');
const form = document.getElementById('clinic-form');
const dropDown = document.getElementById('state-dropdown');
//const filterDropdown = document.getElementById('state-container')
const nameInput = document.getElementById('clinic-name');
const addressInput = document.getElementById('clinic-address');
const cityInput = document.getElementById('clinic-city');
//const stateInput = document.getElementById('state-dropdown').innerText;
const zip_codeInput = document.getElementById('clinic-zip_code');
const phone_numberInput = document.getElementById('clinic-phone_number');
const baseURL = 'http://localhost:3000/clinics'
form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault();
    clinicApi.createClinics();
    event.target.reset();
}

clinicApi.getClinics()
stateCall.getStates()

