import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

 let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extension = ['.com', '.net', '.us', '.io'];

window.onload = function() {
  //write your code here

  for(let a = 0; a < pronoun.length; a++){
    for(let b = 0; b < adj.length; b++){
      for(let c = 0; c < noun.length; c++){
        for(let d = 0; d < extension.length; d++){

          let domain = document.createElement('div');

          //string concatenation
          domain.innerText = `${pronoun[a]}${adj[b]}${noun[c]}${extension[d]}`;

          //creates a div in the body of HTML
          document.body.appendChild(domain);
        }
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
