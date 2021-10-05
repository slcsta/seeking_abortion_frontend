// Needs to remember all the clinics (remember our objects)
// Responsible for setting the properties of each item
// Responsible for the HTML we want to add to the DOM for each item
// Attach any event listeners particular to each item.

class Clinic {
    static all = [];

    constructor({name, address, city, zip_code, state_id, phone_number, id}){             //good place to use destructuring here
        this.name = name 
        this.address = address 
        this.city = city
        this.zip_code = zip_code
        this.state_id = state_id
        this.phone_number = phone_number
        this.id = id  
        this.state = state
        all.push(this)
        //this.element = document.createElement('li');
        //this.element.dataset['id'] = id;
        //this.element.id = `clinic-${id}`;

    }
}