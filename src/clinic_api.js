// handling fetch requests for each item
class clinicApi {
    constructor(port){
        this.baseURL = `${port}/clinics`
    }

    getClinics(){
        fetch(this.baseURL)
        .then(response => response.json())
        .then(data => renderClinics(data))
    }
}