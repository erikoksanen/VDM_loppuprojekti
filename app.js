
console.log("moi");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// JavaScript code here
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  var fixedNav = document.querySelector(".fixednav");
  fixedNav.style.filter = "none";
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
const osWrappers = document.getElementsByClassName("os__wrapper");

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}


const fade1 = document.getElementById("fade1")
const fade2 = document.getElementById("fade2")
const fade3 = document.getElementById("fade3")
const fade4 = document.getElementById("fade4")

const fadelist = [fade1, fade2, fade3, fade4]
console.log(fade1)
window.addEventListener("scroll", ()=>{
  const windowHeight = innerHeight
  for (fade of fadelist) {
    if (fade.getBoundingClientRect().top > windowHeight/4 && fade.getBoundingClientRect().top < windowHeight/3) {
      fade.classList.add("fade-on")
    }
    else fade.classList.remove("fade-on")
  }

})

const fromtop1 = document.querySelector("#slide1").offsetTop;
const fromtop2 = document.querySelector("#slide2").offsetTop;
const fromtop3 = document.querySelector("#slide3").offsetTop;
const fromtop4 = document.querySelector("#slide4").offsetTop;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > fromtop1 - window.innerHeight) {
    document.querySelector("#slide1").classList.add("linkki_o");
  }
  if (window.pageYOffset > fromtop2 - window.innerHeight) {
    document.querySelector("#slide2").classList.add("linkki_v");
  }
  if (window.pageYOffset > fromtop3 - window.innerHeight) {
    document.querySelector("#slide3").classList.add("linkki_o");
  }
  if (window.pageYOffset > fromtop4 - window.innerHeight) {
    document.querySelector("#slide4").classList.add("linkki_v");
  }
});
