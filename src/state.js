// state.js needs to remember all the states
// responsible for setting the properties of each state
// responsible for the HTML we want to add to the DOM for each item
// attach any event listeners particular to each state

class State {
    static all = [];
    static stateContainer = document.getElementById('state-container');

    constructor({id, name}){
        this.id = id;
        this.name = name;
        State.all.push(this)   
    }

    addListener() {
        State.stateContainer.addEventListener('change', this.stateFilter)
    }
    
    //populate the dropdown with state options to filter by state - this is invoked in stateApi
    // next add eventlistener to 'listen' for a change to the dropdown filter
    // conditional statement needed here to do the filtering
    stateFilter = (e) => {   
        let filteredState    // declaring it so i have access to it outside of my scope inside iteration 
        for(const s of State.all) {
            if(s.id === e.target.value) { //equal to what is clicked on
                filteredState = s // first thing i want filteredState to equal that state filter if all the conditions above are
            }   
        //get the clincs that belong to that state we are filtering by
        }
        Clinic.filterByState(filteredState) 
    }

    addToDropdown() {
        dropDown.appendChild(this.setOption()) // appending it to the dropdown
    }
    
    addToDropdownFilter() {
        State.stateContainer.appendChild(this.setOption()) 
            
    }

    // need state options function that gets states and puts them in variable to be used for both dropdowns
    setOption = () => {
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        return option
    }
}
