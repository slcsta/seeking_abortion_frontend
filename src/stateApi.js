class StateApi {
    constructor(port){
        this.port = port 
    }

    getStates(){
        fetch(`${this.port}/states`)
        .then(response => response.json())
        .then(json => {
            json["data"].forEach(element => {
                new State({id: element.id, ...element.attributes})
                State.all.sort((a, b) => {
                    if (a.name < b.name) {
                        //debugger
                        return -1
                    }
                    if (a.name > b.name) {
                        return 1
                    }
                    return 0
                })  
            })
            State.all.forEach(s => {
                s.addListener()
                s.addToDropdown()
                s.addToDropdownFilter()
        })
        
        })
    }
}
