const input = document.getElementById("input");
const btn = document.getElementById("btn");
const insert = document.getElementById("insert");
const userData = document.querySelector("[user-data]");
//Harry potter api=  https://hp-api.onrender.com/api/characters
// https://jsonplaceholder.typicode.com/users
let users=[];
input.addEventListener("input", (e) => {
  const value=e.target.value.toLowerCase();
  // console.log(users);
  users.forEach((user)=>{
    const isVisible= user.name.toLowerCase().includes(value)||user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide",!isVisible);
  })
});
fetch(`https://jsonplaceholder.typicode.com/users`)
.then((res) => res.json())
.then((data) => {
  users=data.map((user) => {
    const card = userData.content.cloneNode(true).children[0];
    // console.log(card);
    const header = card.querySelector("[header]");
    const body = card.querySelector("[body]");
    // console.log(body);
    header.textContent = user.email;
    body.textContent = user.name;
    insert.append(card);
    return{name: user.name,email: user.email,element:card};
  });
});
