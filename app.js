//const osWrappers = document.getElementsByClassName("os__wrapper");

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
  //console.log(window.scrollY)
  //console.log(fade1.getBoundingClientRect().top)
  for (fade of fadelist) {
    if (fade.getBoundingClientRect().top > windowHeight/4 && fade.getBoundingClientRect().top < windowHeight/3) {
      fade.classList.add("fade-on")
    }
    else fade.classList.remove("fade-on")
  }

})