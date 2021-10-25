
class Clinic {
    static all = []; 
    static container = document.getElementById('clinic-list');
    constructor({name, address, city, state, zip_code, state_id, phone_number, id}){            
        this.name = name; 
        this.address = address; 
        this.city = city;
        this.zip_code = zip_code;
        this.phone_number = phone_number;
        this.id = id;
        this.state_id = state_id;  
        this.state = state.name;
        this.element = document.createElement('li');
        this.element.addEventListener('click', this.handleClick);
        Clinic.all.push(this);        
        this.element.dataset['id'] = id;
        this.element.id = `clinic-${id}`;
    }

    static filterByState(filteredState){
        if(filteredState) {
            const filteredClinics = Clinic.all.filter((c) => {
                return c.state_id === parseInt(filteredState.id)
            })
            
            Clinic.container.innerHTML = "";
            for(const clinic of filteredClinics) {
                clinic.renderClinic()
                //debugger
            }
            
        }else{
            Clinic.container.innerHTML ="";
            for(const clinic of Clinic.all)
            clinic.renderClinic()
        }
    }

    render() {
        this.element.innerHTML = `
        <div>
        <span class="name">${this.name}</span>
        <span class="address">${this.address}</span>
        <span class="city">${this.city}, ${this.state}</span>
        <span class="zip_code">${this.zip_code}</span>
        <span class="phone_number">${this.phone_number}</span>
        </div>
        <button class="delete" data-id= "${this.id}">Delete</button>
        `
        return this.element;
    }

    renderClinic(){
        Clinic.container.appendChild(this.render())
    }

    handleClick = (event) => {
        if(event.target.innerText === "Delete") {
            clinicApi.deleteClinic(event)
        }
    }
}