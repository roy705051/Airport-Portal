const imgarr=[
    "./image/background.jpg",
    "./image/background1.jpg"
]
var x = 0;
document.getElementById("coverpic").backL=`background-image: url('${imgarr[0]}')`
  function displayImage(x) {
    document.getElementById("coverpic").style.backgroundImage="url('"+imgarr[x]+"')";
    
  }
  function startTimer() {
  displayImage(x);
//   modal.style.display = "none";
  setInterval(function() {
    
    x = x + 1 >= imgarr.length ? 0 : x + 1;
    displayImage(x);
  },8000);
  }
  gjjvvhvvvvvv