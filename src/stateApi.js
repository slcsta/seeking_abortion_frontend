class StateApi {
    constructor(port){
        this.baseURL = `${port}/states`
    }

    getStates(){
        fetch(this.baseURL)
        .then(response => response.json())
        .then(json => {
            json["data"].forEach(element => {
                const s = new State({id: element.id, ...element.attributes})
                s.addDropDown()
            })
        })
    }

}