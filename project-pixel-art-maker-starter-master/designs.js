// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
// Your code goes here!


  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);


//parameters fetching
  const hieght = urlParams.get('height');
  const width = urlParams.get('width');
  const size = urlParams.get('size')
  console.log(size)
  const styleDef = `height:${size}; width:${size};`

//grid creation
  var row = "<tr>" + ((`<td class = 'pixel' style= ${styleDef} id = ></td>`).repeat(width)) + "</tr>";
  var grid = row.repeat(hieght);

  var pixelCanavs = document.getElementById("pixelCanvas");

  pixelCanavs.insertAdjacentHTML("afterbegin", grid);

  var pixels = document.getElementsByClassName("pixel")

 
  function callback(id){
    return function () {
      if(pixels[id].style.backgroundColor == ''){
        draw(pixels[id],styleDef)
    }
    else{
      pixels[id].setAttribute("style", (styleDef + " background-color:") ) 

    }
  }
  }


  for(var i = 0; i <= ((pixels.length)-1  ); i++){
    pixels[i].setAttribute("id", i)

    pixels[i].addEventListener('click', callback(i))
}}

// grid editing

function draw(pixel,styleDef) {
  var color = (document.getElementById("colorPicker")).value 
  var css = styleDef + " background-color:" + color +";"
  pixel.setAttribute("style", css)
}








document.addEventListener('DOMContentLoaded', function () { 
  makeGrid() });