let getJsonFile = (pathToFile) => {
  let request = new XMLHttpRequest();
  
  request.open("GET", pathToFile, false);
  request.send(null);
  
  let my_JSON_object = JSON.parse(request.responseText);
  
  return my_JSON_object;
};

let str = '';

let emoji = document.getElementsByClassName('emoji_pos')[0];
const allEmoji = getJsonFile("https://emoji-api-app.herokuapp.com/");
draw(allEmoji); 

function draw(array){
  str = '';
  for(let i = 0; i < array.length; i++){
    str +=
      `<div class="emoji-block">
        <p>${array[i].symbol}</p>
        <h2 class="emoji-name">${array[i].title}</h2>
        <p>${array[i].keywords}</p>
      </div>`;
      
  }
  emoji.innerHTML = str;

}

document.querySelector('#search').oninput = function(){
  let value = this.value.trim();
  let info = allEmoji.filter(emoji => emoji.title.includes(value) ||  emoji.keywords.includes(value));
  
  draw(info);
  console.log(info)
  
}