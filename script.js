
var source = ["Unsplash", "Pixabay", "Pexels", "Getty images", "iStockphoto", "Google images"]

var selectSource = source[Math.floor(Math.random() * 6)]

window.onload = function() {
  
  document.getElementById("sourceName").innerHTML = selectSource;
  
  var container = document.getElementById("content");

  dataColours.forEach((d,i)=> {
    console.log((d.Percent) + "%")
     if (d.Source == selectSource){
          var colourBlock = document.createElement("div");
          colourBlock.style.background = d.hexCode;
          colourBlock.style.width = (d.Percent*100) + "%";
          colourBlock.innerHTML = "";
          colourBlock.classList.add("colContainer");
          container.appendChild(colourBlock);}
});
}
