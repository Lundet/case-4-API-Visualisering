const button = document.querySelector("button");

const apiKey = "api_key=5w0oALe8aKV1rx64FoAQKn6vCeDAjaeTvGangKyT"

const searchInput = document.getElementById("search-input")



// button.addEventListener("click", () => {
//     fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=5w0oALe8aKV1rx64FoAQKn6vCeDAjaeTvGangKyT").then(Response => Response.json()).then((data) => {

//         const photos = data.photos;
//         console.log(`Number of photos: ${photos.length}`);
//         let output = '';
//         photos.forEach(photo => {
//             output += `<li><img src="${photo.img_src}" alt="${photo.camera.full_name}"/></li>`;

//         });
//         document.getElementById("images").innerHTML = output;
//     })

// });


searchInput.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`https://images-api.nasa.gov/search?q=${searchInput.value}`)
    .then(Response => Response.json())
    .then((data) => {
      
    });
});

