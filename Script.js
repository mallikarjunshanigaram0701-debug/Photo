const timeElement = document.getElementById("time");

function updateClock() {

const now = new Date();

timeElement.innerHTML =
now.toLocaleTimeString();

}

setInterval(updateClock,1000);
updateClock();


const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});


const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

const filter =
searchInput.value.toLowerCase();

const rows =
document.querySelectorAll("#timetable tbody tr");

rows.forEach(row=>{

let text =
row.textContent.toLowerCase();

row.style.display =
text.includes(filter)
? ""
: "none";

});

});


function highlightCurrentClass(){

const rows =
document.querySelectorAll(".subject");

const now = new Date();

const currentMinutes =
now.getHours()*60 +
now.getMinutes();

rows.forEach(row=>{

row.classList.remove("active");

const timeText =
row.cells[0].innerText;

const parts =
timeText.split("-");

const start =
convert(parts[0].trim());

const end =
convert(parts[1].trim());

if(currentMinutes>=start &&
currentMinutes<=end){

row.classList.add("active");

}

});

}

function convert(time){

let [h,m] =
time.split(":").map(Number);

return h*60+m;

}

setInterval(
highlightCurrentClass,
60000
);

highlightCurrentClass();
