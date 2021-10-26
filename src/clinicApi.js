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
            phone_number: phone_numberInput.value,
            state_id: dropDown.value
        }
    
        const configObject = {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(clinicInfo)      
        }
        fetch(this.baseURL, configObject)  
        .then(response => response.json())
        .then(json => {
            const c = new Clinic({id:json.data.id, ...json.data.attributes})
            c.renderClinic()
        })
    }

    deleteClinic(event){
        const id = event.target.dataset.id
        event.target.parentElement.remove()
        const configObject = {
            method: 'DELETE'   
        }
        fetch(baseURL + `/${id}`, configObject)
        .then(response => response.json())
        .then(json => alert(json.message))
    }
}


