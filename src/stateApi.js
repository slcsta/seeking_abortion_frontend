class StateApi {
    constructor(port){
        this.port = port 
    }

    getStates(){
        fetch(`${this.port}/states`)
        .then(response => response.json())
        .then(json => {
            json["data"].forEach(element => {
                let s = new State({id: element.id, ...element.attributes})
                s.addToDropdownFilter()
                s.addListener()
                //s.addToDropDown()
               
                // adding second dropdown
            })
        })
    }

}