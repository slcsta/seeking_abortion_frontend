// Needs to remember all the states
// responsible for setting the properties of each state
// responsible for the HTML we want to add to the DOM for each item
// attach any event listeners particular to each state

class State {
    // make class variables
    // create a static container for states
    static all = [];
    static stateContainer = document.getElementById('state-container');

    constructor({id, name}){
        this.id = id;
        this.name = name;
        
        State.all.push(this)  
    }
    
    //populate the dropdown with state options to filter by state - this is invoked in stateApi
    addToDropdownFilter() {
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        filterDropdown.appendChild(option) 
        debugger
    }
    
    // next add an event listener to 'listen' for a change to the dropdown filter
    // addListener(event) {
    //     this.stateContainer.addEventListener('change', this.setState)
    //     debugger
    // }

    // conditional statement needed here to do the filtering

    // setStateFilter = (event) => {
    //     let filteredState     
    //     State.all.forEach(s => {
        
    //         if(s.element === "to the state we want to filter by"){
    //             s.element.classList "set this state to be what we filter"
    //             filteredState = s 
    //         }else{
    //             s.element.classList "remove that state and put in new state selected"
    //         }
    //         Clinic.filteredByState(filteredState) "then we need some other code here to get the clincs that belong to that state we are filtering by"
    //     })
    // }
    
    // had to change code for first dropdown - this dropdown no longer working will have to fix after filter
    // addToDropDown() {
    //     const option = document.createElement('option'); // first creating the option
    //     option.value = this.id;   // then adding a value to the option so that we pass that value (id) to the backend
    //     option.innerText = this.name; // adding inner text
    //     dropDown.appendChild(option) // appending it to the dropdown

        // then we need to call this, so go back to stateApi.js and invoke it there
    // }
}