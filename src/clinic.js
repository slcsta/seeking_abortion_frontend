// Needs to remember all the clinics (remember our objects)
// Responsible for setting the properties of each clinic
// Responsible for the HTML we want to add to the DOM for each item
// Attach any event listeners particular to each clinic

class Clinic {
    static all = []; 
    static container = document.getElementById('clinic-list');
    constructor({name, address, city, zip_code, state_id, phone_number, id}){             //good place to use destructuring here
        this.name = name 
        this.address = address 
        this.city = city
        this.zip_code = zip_code
        this.phone_number = phone_number
        this.id = id
        this.state_id = state_id  
        //this.state = state 
        this.element = document.createElement('li');
        this.element.addEventListener('click', this.handleClick)
        Clinic.all.push(this)        
        this.element.dataset['id'] = id;
        this.element.id = `clinic-${id}`;
    }

    static filterByState(filteredState){
        if(filteredState) {
            const filteredClinics = Clinic.all.filter((c) => {
                return c.state_id === parseInt(filteredState.id)
            })
            // const filteredClinics = Clinic.all.filter((c) => {
            //     return c.state_id === parseInt(filteredState.id)
                
                
            //})
            //for(const c of Clinic.all){
                //if(c.state_id === parseInt(filteredState.id)){
                    //c.element.style.display = ""
                //}else{
                  //  c.element.style.display = "none"
                //}
            //}
            Clinic.container.innerHTML = "";
            for(const clinic of filteredClinics) {
                clinic.renderClinic()
                //debugger
            }
            //c.renderClinic()
            //debugger
        }else{
            Clinic.container.innerHTML ="";
            for(const clinic of Clinic.all)
            clinic.renderClinic()
        }
    }

    render() {
        //const li = document.createElement('li');
        this.element.innerHTML = `
        <div>
        <span class="name">${this.name}</span>
        <span class="address">${this.address}</span>
        <span class="city">${this.city}</span>
        <span class="zip_code">${this.zip_code}</span>
        <span class="phone_number">${this.phone_number}</span>
        </div>
        <button class="edit" data-id= "${this.id}">Edit</button>
        <button class="delete" data-id= "${this.id}">Delete</button>
        `
        return this.element
    }

    renderClinic(){
        Clinic.container.appendChild(this.render())
        // Clinic.container.appendChild(this.render())
        //form.reset() //reset form to be cleared after something is entered
        //going to put event listener on the parent element li instead of on the button child element - b/c it's simpler
        //li.addEventListener('click', handleClick)
    }

// make this an arrow function because of key word 'this' 
    handleClick = (event) => {
        if(event.target.innerText === "Delete") {
            clinicApi.deleteClinic(event)
        
        } else if(event.target.innerText === "Edit") {
            event.target.innerText = "Save"
        // change inner text of button to save
        // have an edit form appear with values filled out
        // change info on backend in db
        // change info on the frontend (the DOM)
        // this is now an instance function inside a class
        // how do i call it now that it's in the class?
        // add this
            this.createEditFields(event.target)
        } else if(event.target.innerText === "Save"){
            event.target.innerText = "Edit"
            this.saveUpdatedItem(event.target)
        }
    }

    createEditFields(){
        // query selector will always give me the first element of what we are selecting
        // previousElementSibling no longer works here b/c edit is now one form as a div
        const div = this.element.queryselector('div');
            for(const element of div.children){
                let inputValue = element.innerText;
            }
     // Good way to do this is to loop over each element of the div so that we have like 1 form and not multiple forms for each attribute
    }

    saveUpdatedClinic(){

    }
}