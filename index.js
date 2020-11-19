// Add your code here
let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };
  
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch("http://localhost:3000/dogs", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  });

  const bodyTag = document.querySelector("body")

  // function addToTheDom(data) {
  //     const h1Tag = document.createElement("h1")
  //     h1Tag.innerText = data.id
  //     bodyTag.append(h1Tag)
  // }

  function submitData(name, email) {
      fetch("http://localhost:3000/users", {
          method: 'POST',
          headers: {
              'content-type': 'application/json',
              'accept': 'application/json'
          },
          body: JSON.stringify({
              name: name,
              email: email
            }),
        })
        .then(response => response.json())
        .then(data => {
            document.body.innerHTML = data.id
            console.log("success:", data)
        })
        .catch( function ( error ) {
          document.body.innerHTML = error.message
        } )
    }

