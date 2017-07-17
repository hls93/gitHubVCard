//name, Github Url, Email, Company, Website
console.log("hello world");
let picture = document.querySelector('.picture')
// want to pull a new XMLHttpRequest
let request = new XMLHttpRequest();
request.addEventListener("load", displayCharacters);
request.open('GET', 'https://api.github.com/users/hls93');
request.send();

// console.log(request);

function displayCharacters() {
  let data = JSON.parse(this.responseText);
  let list = '';
  console.log(data);
  picture.innerHTML = `
      <div class="container">
        <header>
          <h1>Helen Shaw</h1>
        </header>
        <div class="bottom">
          <div class="left">
            <h3>The Basics</h3>
            <ul class="myList">
              <li><span class= "descript">name:</span> ${data.name}</li>
              <li><span class="descript">Github Url</span> ${data.login}</li>
              <li><span class="descript">email:</span> ${data.email}</li>
              <li><span class="descript">company:</span> ${data.company}</li>
              <li><span class="descript">website:</span> ${data.type}
              </ul>
            </div>
              <div class="right">
                <h3>The Story</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="image">
                <img src="${data.avatar_url}" alt="">
                </div>
              </div>
              </div>`;
}
