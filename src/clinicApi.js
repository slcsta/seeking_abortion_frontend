// handling fetch requests for each item
class clinicApi {
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
}