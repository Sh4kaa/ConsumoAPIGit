const url = 'https://api.github.com/users/sh4kaa';



let botaoApi = document.querySelector('#pegarapi');

botaoApi.onclick = function pegarDados() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let divImg = document.querySelector('#imagem');
      let img = document.createElement('img');
      img.setAttribute('src', data.avatar_url);
      divImg.appendChild(img);
    })
    .catch(err => console.log(err))
}




