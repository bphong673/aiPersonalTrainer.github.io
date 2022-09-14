

var pagelanding = localStorage.setItem('page', "home")

var bar = document.getElementById("navbar-list")
var name = 'Hoe'

function changepage(name){
  console.log( localStorage.getItem(name))
}

console.log(bar.childNodes[1].childNodes[0].innerHTML)

for (var i=0; i<bar.childElementCount; i++){
  console.log(bar.childNodes[i].childNodes[1].textContent)
}
