var popover= document.querySelector(".pop_overlay")
var popbox=document.querySelector(".pop_box")
var addbut=document.getElementById("addbut")
var cancelbut=document.getElementById("cancel")
addbut.addEventListener("click",function(){
    popover.style.display="block"
    popbox.style.display="block"
})

cancelbut.addEventListener("click",function(event){
    event.preventDefault()
    popover.style.display="none"
    popbox.style.display="none"
})
const container=document.querySelector(".con")
var addbook=document.getElementById("add")
var booktitle=document.getElementById("book_title")
var bookauthor=document.getElementById("book_author")
var bookdesc=document.getElementById("desc")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var di=document.createElement("div")
    di.setAttribute("class","bookcon")
    di.innerHTML=`<h2>${booktitle.value}</h2>
    <h3>${bookauthor.value}</h3>
    <p>${bookdesc.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(di)
    popover.style.display="none"
    popbox.style.display="none"
})
function deletebook(event)
{
    event.target.parentElement.remove()
}
