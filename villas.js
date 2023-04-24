const villasWrapper = document.getElementById("villas-wrapper");

const villaOptionCreation = (villa) => {
  console.log(villa);
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "villa");
  // const image = document.createElement("img");
  // image.setAttribute("src", villa.photo);

  const titleWrapper = document.createElement("div");
  titleWrapper.setAttribute("class", "title-wrapper");

  const title = document.createElement("span");
  title.setAttribute("class", "title");

  const image = document.createElement("img");
  image.setAttribute("src", villa.photo);

  const price = document.createElement("span");
  price.setAttribute("class", "price");

  const link = document.createElement("a");
  link.setAttribute("class", "villa-link");
  link.href = "./villa.html";

  link.addEventListener("click", () => {
    localStorage.setItem("id", villa.id);
  });

  title.innerHTML = villa.name;
  price.innerHTML = `price: ${villa.price} €`;

  titleWrapper.append(title);
  titleWrapper.append(price);

  wrapper.append(image);
  wrapper.append(titleWrapper);

  villasWrapper.append(wrapper);

  link.append(wrapper);

  villasWrapper.append(link);
};

fetch("https://642c646b208dfe25472f0dd4.mockapi.io/Villas")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((villa) => {
      villaOptionCreation(villa);
    });
  });
