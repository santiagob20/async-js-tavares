import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlAPI, data) {
  const response = fetch(urlAPI, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: "New Product SB",
  price: 150,
  description: "DEscription of my SB product",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

postData(`${API}/products`, data)
.then(response => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
