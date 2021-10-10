// state.js needs to remember all the states
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

    addListener() {
        State.stateContainer.addEventListener('change', this.setStateFilter)
        //debugger
    }
    
    //populate the dropdown with state options to filter by state - this is invoked in stateApi
    // next add eventlistener to 'listen' for a change to the dropdown filter
    // conditional statement needed here to do the filtering
    setStateFilter = (event) => {
        let filteredState     
        State.all.forEach(s => {
            if(s.id === event.target.value){
                filteredState = s 
            }
         })
        Clinic.filteredByState(filteredState) //get the clincs that belong to that state we are filtering by
    }
    
    addToDropdownFilter() {
        State.stateContainer.appendChild(this.estStateOptions)
            
    }
    
    // had to change code for first dropdown - this dropdown no longer working will have to fix after filter
    // addToDropDown() {
    //     const option = document.createElement('option'); // first creating the option
    //     option.value = this.id;   // then adding a value to the option so that we pass that value (id) to the backend
    //     option.innerText = this.name; // adding inner text
    //     dropDown.appendChild(option) // appending it to the dropdown

        // then we need to call this, so go back to stateApi.js and invoke it there
    // }

    // need state options function that gets states and puts them in variable to be used for both dropdowns
    estStateOptions(){
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        filterDropdown.appendChild(option)
    }
}
