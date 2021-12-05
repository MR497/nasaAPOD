
const api = 'https://api.nasa.gov/planetary/apod?api_key=KHVu7LzOwP2oIzRcma5Gr4XwSuiVkH6JVceBpvxu&date=';

function today(){
  date = '';

  let apiURL = api + date;

  console.log(apiURL)
  fetch(apiURL)
    .then( (data) => (data.json()) )
    .then( (date) => gen(date) )
}

function getDate(){
  date = document.getElementById('dateArea').value;

  let apiURL = api + date;

  console.log(apiURL)
  fetch(apiURL)
    .then( (data) => (data.json()) )
    .then( (date) => gen(date) )
}

const gen = (data) => {
  console.log(data)
  const html = `
    <div class="date">${data.date}</div>
    <div class="title">${data.title}</div>
    <img width="50%" src=${data.url} alt="Unable to play video, try the link" ></img>
    <br>
    <a href=${data.url} target="_blank">Link to Image/video</a>
    <p> Description:</p>
    <div class="des">${data.explanation}</div>
  `
  const nasaDiv = document.querySelector('.nasa')
    nasaDiv.innerHTML = html
}
