
var source = ["Unsplash", "Pixabay", "Pexels", "Getty images", "iStockphoto", "Google images"]

var selectSource = source[Math.floor(Math.random() * 6)]

window.onload = function() {
  
  document.getElementById("sourceName").innerHTML = selectSource;
  
  var container1 = document.getElementById("content");
  var container2 = document.getElementById("content-background");

  dataColours.forEach((d,i)=> {
     if (d.Source == selectSource){
          var colourBlock = document.createElement("div");
          colourBlock.style.background = d.hexCode;
          colourBlock.style.width = (d.Percent*100) + "%";
          colourBlock.innerHTML = "";
          colourBlock.classList.add("colContainer");

          var colourBlockClone = colourBlock.cloneNode(true);

          /*container1.appendChild(colourBlockClone); */
          container2.appendChild(colourBlock);}
          
});
}
