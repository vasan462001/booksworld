var popoverlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popupbox")
var addbutton=document.getElementById("addpopup")
addbutton.addEventListener("click",function(){
    popoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    popoverlay.style.display="none"
    popupbox.style.display="none"

})

var container=document.querySelector(".container")
var addbook=document.getElementById("add")
var booktitle=document.getElementById("book-title")
var father=document.getElementById("father-of-program")
var description=document.getElementById("book-description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontain")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h3>${father.value}</h3>
    <p >${description.value}</p>
    <button onclick="deletebook(event)">DELETE</button>`
    container.append(div)
    popoverlay.style.display="none"
    popupbox.style.display="none"

})

function deletebook(event){
    event.target.parentElement.remove()
}