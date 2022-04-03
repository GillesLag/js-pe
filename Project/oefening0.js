let oefening0 = () => {
  document.querySelector('title').innerHTML = 'Gilles Lagrillière';

  document.querySelector('a').innerHTML = '';

  let img = document.createElement('img');

  img.src = 'logo.jpg';
  let src = document.querySelector('.navbar-brand');
  src.appendChild(img);
}