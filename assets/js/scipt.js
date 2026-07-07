const words = [
"Software Engineer",
"Data Scientist",
"Backend Developer",
"Problem Solver"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){

current = words[i];

if(!isDeleting){

document.getElementById("typing").textContent =
current.substring(0,j++);

if(j>current.length){

isDeleting=true;

setTimeout(type,1200);

return;

}

}

else{

document.getElementById("typing").textContent =
current.substring(0,j--);

if(j==0){

isDeleting=false;

i++;

if(i==words.length)
i=0;

}

}

setTimeout(type,isDeleting?50:120);

}

type();

// ==========================
// Project Filter
// ==========================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter = button.dataset.filter;

projectCards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

}

else{

if(card.classList.contains(filter)){

card.style.display="block";

}

else{

card.style.display="none";

}

}

});

});

});