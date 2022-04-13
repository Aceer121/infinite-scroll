// Unsplash API
const count = 10;
const apiKey = 'GHrhY0_y7gGc8qW2wW9lJAKgcErDVcgWX42g0lYA4C8';
const apiURL = 'https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}';


// Get photos from Unsplash API
async function getPhotos() {
    try {
         const response = await fetch(apiURL);
         const data = await response.json();
         console.log(data);
    }    catch (error) {
         // Catch Error Here
    }
}

// On Load
getPhotos();