console.log('hello')

// good practice to wrap our fetch request in a function
// fetch request for clinics
function getClinics(){
    fetch('http://localhost:3000/items')
    .then(response => response.json())
    .then(data = renderClinics(data))
}

function renderItems(data){
    const clinics = data["data"];
    clinics.forEach((clinic) =>{

    })
}

// and then because we wrapped fetch in a function we need to call it down at the bottom
getClinics()