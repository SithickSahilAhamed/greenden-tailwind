// Slecting side navbar
var sidenav =document.getElementById("sidenav")
var menuicon =document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(event){
    sidenav.style.right=0

})
closenav.addEventListener("click",function(event){
    sidenav.style.right="-50%"
})