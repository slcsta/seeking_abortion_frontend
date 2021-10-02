console.log('hello')

// good practice to wrap our fetch request in a function
// fetch request for clinics
// when info gets sent over the internet it gets turned into a string so we have to jsonify again
//function getClinics(){
    fetch('http://localhost:3000/clinics')
    .then(response => response.json())
    .then(data => console.log(data))

// function renderItems(data){
//     const clinics = data["data"];
//     // clinics.forEach((clinic) => {
//     }
//}

// and then because we wrapped fetch in a function we need to call it down at the bottom
// getClinics()