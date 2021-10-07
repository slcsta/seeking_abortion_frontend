class StateApi {
    constructor(port){
        this.port = port 
    }

    getStates(){
        fetch(`${this.port}/states`)
        .then(response => response.json())
        .then(json => {
            
            json["data"].forEach(element => {
                //debugger
                const s = new State({id: element.id, ...element.attributes})
                s.addDropDown()
            })
        })
    }

}