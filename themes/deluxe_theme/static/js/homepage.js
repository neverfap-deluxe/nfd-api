// index.html

var latest__post__click = document.querySelector('#latest');
var latest__posts = document.querySelector('#latest__posts');

var popular__post__click = document.querySelector('#popular');
var popular__posts = document.querySelector('#popular__posts');

latest__post__click.onclick = function(event) { 
  latest__post__click.style.color = 'black';
  latest__post__click.style.border = '5px solid black';
  popular__post__click.style.color = 'grey';
  popular__post__click.style.border = '5px solid grey';
  
  latest__posts.style.display = 'block';
  popular__posts.style.display = 'none';
}
popular__post__click.onclick = function(event) { 
  latest__post__click.style.color = 'grey';
  latest__post__click.style.border = '5px solid grey';
  popular__post__click.style.color = 'black';
  popular__post__click.style.border = '5px solid black';

  latest__posts.style.display = 'none';
  popular__posts.style.display = 'block';
} 

// // header.html

// var isClicked = false;
// var popular__click = document.querySelector('#popular__click');
// var popular__dropdown = document.querySelector('#popular__dropdown');
// popular__click.onclick = function(event) { 
//   if (isClicked) {
//     popular__dropdown.style.display = 'none';
//     isClicked = false;
//   } else {
//     popular__dropdown.style.display = 'block';
//     isClicked = true;
//   }
// } 
