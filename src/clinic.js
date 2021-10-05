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
        //this.state_id = state_id
        this.phone_number = phone_number
        this.id = id  
        //this.state = state
        this.element = document.createElement('li');
        all.push(this)
        
        //this.element.dataset['id'] = id;
        //this.element.id = `clinic-${id}`;
    }

    render() {
        //const li = document.createElement('li');
        this.element.innerHTML = `
        <div>
        <span class="name">${this.name}</span>
        <span class="address">${this.address}</span>
        <span class="city">${this.city}</span>
        <span class="zip_code">${this.zip_code}</span>
        <span class="phone_number">${thisphone_number}</span>
        </div>
        <button class="edit" data-id= "${this.id}">Edit</button>
        <button class="delete" data-id= "${this.id}">Delete</button>
        `
        ul.appendChild(li)
        form.reset() //reset form to be cleared after something is entered
        // going to put event listener on the parent element li instead of on the button child element - b/c it's simpler
        li.addEventListener('click', handleClick)
    }
}