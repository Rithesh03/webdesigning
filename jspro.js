var popupoverlay=document.querySelector(".popup-overlay");
var popuplabel=document.querySelector(".popup-label");
var upup=document.getElementById("upup");
 upup.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popuplabel.style.display="block";
})
var cancel=document.getElementById("cancel");

cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none";
    popuplabel.style.display="none";
})
var add=document.getElementById("add");
var title=document.getElementById("book-title");
var author=document.getElementById("authorname");
var para=document.getElementById("book-para");
var container=document.querySelector(".container");
var txteror=document.getElementById("txteror");

add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
    <h5>${author.value}</h5>
    <p>${para.value}</p>
    <button onclick="cleardel(event)">delete</button>`
    container.append(div)
    popupoverlay.style.display="none";
    popuplabel.style.display="none";

})
function cleardel(event){
    event.target.parentElement.remove()
}

