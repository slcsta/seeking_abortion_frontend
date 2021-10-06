// handling fetch requests for each item
class ClinicApi {
    constructor(port){
        this.baseURL = `${port}/clinics`
    }

    getClinics(){
        fetch(this.baseURL)
        .then(response => response.json())
        .then(data => {  
            data["data"].forEach((clinic) => {
            const c = new Clinic({id:clinic.id, ...clinic.attributes})
            c.renderClinic()
            })
        })
    }

    createClinics(){
        const clinicInfo = {   
            name: nameInput.value,
            address: addressInput.value,
            city: cityInput.value,
            zip_code: zip_codeInput.value,
            phone_number: phone_numberInput.value
    }
    // first thing I want to do here is add prevent default method b/c the form will automatically try to send a post request
    // we want to prevent the post request from happening b/c the post request refreshes the pg. - we don't want page refreshed
    //event.preventDefault();
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
        fetch(this.baseURL, configObject)  //creating something new so we want to add a fetch request that will send some info - we are sending params here to create a new item
        .then(response => response.json())
        .then(json => {
            const c = new Clinic({id:json.data.id, ...json.data.attributes})
            c.renderClinic()
        })
    }

    // fetch request for edit to add later
    // updateClinic(clinic){

    // }

    deleteClinic(event){
        const id = event.target.dataset.id
        event.target.parentElement.remove()
        const configObject = {
            method: 'DELETE'   
        }
        fetch('baseURL' + `/${id}`, configObject)
        .then(response => response.json())
        .then(json => alert(json.message))
    }
}


