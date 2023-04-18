const AziWidget = function(key) {
   var elementId="azi-widget";
    var element=document.getElementById(elementId);
    const btn = document.createElement("button");
    btn.innerText = "Open Dialog";
    btn.className="show-dialog";
    btn.addEventListener("click",()=>{
        alert("Hello World");
    })
    element.appendChild(btn);
}
