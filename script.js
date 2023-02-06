const button = document.querySelector("button");

const apiKey = "api_key=5w0oALe8aKV1rx64FoAQKn6vCeDAjaeTvGangKyT"

const searchInput = document.getElementById("searchInput")



button.addEventListener("click", () => {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=5w0oALe8aKV1rx64FoAQKn6vCeDAjaeTvGangKyT").then(Response => Response.json()).then((data) => {

    console.log(data);
    const photos = data.photos;
    
    let output = '';
    photos.forEach(photo => {
      output += `<li><img src="${photo.img_src}" alt="${photo.camera.full_name}"/></li>`;
    });
    document.getElementById("images").innerHTML = output;
  })
  
});