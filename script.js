const button = document.querySelector("button");

const apiKey = "api_key=5w0oALe8aKV1rx64FoAQKn6vCeDAjaeTvGangKyT"

const searchInput = document.getElementById("searchInput")

const camera = document.getElementById("camera")


button.addEventListener("click", () => {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&=&api_key=5w0oALe8aKV1rx64FoAQKn6vCeDAjaeTvGangKyT&camera=" + camera.value).then(Response => Response.json()).then((data) => {

        console.log(data);
        const photos = data.photos;
        console.log(`Number of photos: ${photos.length}`);
        let output = '';
        photos.forEach(photo => {
            output += `<li>
            <figure>
            <img src="${photo.img_src}" alt="${photo.camera.full_name}"/>
            <figcaption>             Rovername: ${photo.rover.name} <br>
            Launchdate: ${photo.rover.launch_date}<br>
            Landingdate:${photo.rover.landing_date}<br>           
            </figcaption>
            </figure>
            </li>`;

        });
        document.getElementById("images").innerHTML = output;
    })

});


// searchInput.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(`https://images-api.nasa.gov/search?q=${searchInput.value}`)
//     .then(Response => Response.json())
//     .then((data) => {
      
//     });
// });

