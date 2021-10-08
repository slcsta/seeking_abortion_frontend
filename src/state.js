// Needs to remember all the states
// responsible for setting the properties of each state
// responsible for the HTML we want to add to the DOM for each item
// attach any event listeners particular to each state

class State {
    // make class variables
    // create a static container for states

    static all = [];
    static stateContainer = document.getElementById('state-dropdown');

    constructor({id, name}){
        this.id = id
        this.name = name
        
        State.all.push(this)
    }

    // for filtering by state
    // need an event listener to set state
    // 

    addToDropDown(){
        const option = document.createElement('option'); // first creating the option
        option.value = this.id;   // then adding a value to the option so that we pass that value (id) to the backend
        option.innerText = this.name; // adding inner text
        dropDown.appendChild(option) // appending it to the dropdown

        // then we need to call this, so go back to stateApi.js and invoke it there
    }
}