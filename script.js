const button = document.querySelector("button");

const container = document.querySelector("#container")

const apiKey = "https://api.nasa.gov/planetary/apod?api_key=5w0oALe8aKV1rx64FoAQKn6vCeDAjaeTvGangKyT"



button.addEventListener("click", () => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=5w0oALe8aKV1rx64FoAQKn6vCeDAjaeTvGangKyT").then(Response => Response.json()).then((data) => {
       
        console.log("data", data)  
           
        
    })
});