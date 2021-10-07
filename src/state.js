// Needs to remember all the states
// responsible for setting the properties of each state
// responsible for the HTML we want to add to the DOM for each item
// attach any event listeners particular to each state

class State {
    // make class variables
    // create a static container for states

    static all = [];
    static stateContainer = document.getElementById('state-dropdown');

    constructor({id, name,}){
        this.id = id
        this.name = name
        
        State.all.push(this)
    }

    addDropDown(){
        const choice = document.createElement('choice')
        choice.value = this.id
        choice.innerText = this.name
        dropDown.append(option)
    }
}