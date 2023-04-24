const button = document.getElementById("add_button");

button.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const photo = document.getElementById("photo").value;
  const description = document.getElementById("description").value;
  const location = document.getElementById("location").value;

const newVilla = {
  name: name,
  price: price,
  photo: photo,
  description: description,
  location: location,
};


  fetch(`https://642c646b208dfe25472f0dd4.mockapi.io/Villas`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newVilla),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const successMessage = document.getElementById("success_message");
      successMessage.innerHTML = "Villa is added";

      setTimeout(() => {
        window.location.replace("./index.html");
      }, 1000);
    });
    
});