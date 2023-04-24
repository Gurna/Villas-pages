const villaId = localStorage.getItem("id");

const addElementsToScreen = (data) => {
  const villaPhoto = document.getElementById("photo");
villaPhoto.style.backgroundImage = `url(${data.photo})`;
console.log(data);

  const title = document.getElementById("villa-title");
  title.innerHTML = data.name;

  const description = document.getElementById("villa-description");
  description.innerHTML = data.description;

  const price = document.getElementById("villa-price");
  price.innerHTML = `price: ${data.price} €`;

  const location = document.getElementById("villa-location");
  location.innerHTML = `location: ${data.location}`;
};

fetch(`https://642c646b208dfe25472f0dd4.mockapi.io/Villas/${villaId}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    addElementsToScreen(data);
  });

  
  // const deleteElementsFromScreen = ((data)=>{
  //   const deleteIcon = document.getElementById('delete-icon');
  //   deleteIcon.innerHTML= data.villaId;
  // })
  

  // deleteIcon.addEventListener("click", ()=>{
    
  //   fetch(`https://642c646b208dfe25472f0dd4.mockapi.io/Villas/${villaId}`, {
  //     method: "DELETE",
  //   })
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((data) => {
  //       const deleteMessage = document.getElementById("delete_message");
  //       deleteMessage.innerHTML = "Villa is deleted";
  
  //       setTimeout(() => {
  //         window.location.replace("./index.html");
  //       }, 1000);
  //     });
  
  // });

