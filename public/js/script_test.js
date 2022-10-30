fetch('http://localhost:3001/get', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
  
}).then(response => response.json())
    .then(data => {

        console.log(data);


    });
