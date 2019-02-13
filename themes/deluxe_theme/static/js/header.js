var link__home = document.querySelector('#link__home');
var link__guide = document.querySelector('#link__guide');
var link__articles = document.querySelector('#link__articles');
var link__practices = document.querySelector('#link__practices');
var link__about = document.querySelector('#link__about');
var link__contact = document.querySelector('#link__contact');

var pathname = window.location.pathname; // usually it's /article/
var splitPath = pathname.split('/');
var pathnameProper = splitPath[1];

switch(pathnameProper) {
  case '':
    link__home.style.borderBottom = '5px solid orange';
    break;

  case 'guide':
    link__guide.style.borderBottom = '5px solid orange';
    break;

  case 'articles':
    link__articles.style.borderBottom = '5px solid orange';
    break;
  
  case 'practices':
    link__practices.style.borderBottom = '5px solid orange';
    break;

  case 'about':
    link__about.style.borderBottom = '5px solid orange';
    break;

  case 'contact':
    link__contact.style.borderBottom = '5px solid orange';
    break;
}

// var good_choice = document.querySelector('.header__link__wrapper--guide--good-choice');

// if (pathnameProper === 'guide') {
//   good_choice.style.display = 'block';
// } else {
//   good_choice.style.display = 'none';
// }