
class State {
    static all = [];
    static stateContainer = document.getElementById('state-container');
    
    constructor({id, name}){
        this.id = id;
        this.name = name;
        State.all.push(this)
    }


    // Get my list states by name
    // sorts the states alphabetically by name
    // after sort the states add to the dropdown
    // static sortStates(){
    
    // static sortByStates() {
    // static sortedStates = State.all.sort((a, b) => {
    //     if (a.name < b.name){
    //         return -1
    //     } if (a.name > b.name){
    //         return 1
    //     } else return 0
    //     //debugger
    //  })
    //     

    addListener() {
        State.stateContainer.addEventListener('change', this.stateFilter)
    }
    
    stateFilter = (e) => {   
        let filteredState    
        for(const s of State.all) { 
            if(s.id === e.target.value) { 
                filteredState = s 
            }   
        }
        Clinic.filterByState(filteredState) 
    }

    addToDropdown() {
        dropDown.appendChild(this.setOption())
    }
    
    addToDropdownFilter() {
        State.stateContainer.appendChild(this.setOption()) 
    }

    setOption = () => {
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        return option
    }
}
