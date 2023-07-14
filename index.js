const imgarr=[
    "./image/background.jpg",
    "./image/background1.jpg"
]
var x = 0;
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
  const email = document.getElementById("email");
  const pass = document.getElementById("pass");
  const sub = document.getElementById("sub");
  
     sub.addEventListener("submit", function(event) {
      event.preventDefault();
      fetch("http://localhost:8080/userdata", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          const comp = data.find((ele) => ele.email === email.value);
          console.log(comp.email);
          console.log(comp.password);
          let k=comp.email === email.value && comp.password === pass.value
         if (
            comp.email === email.value &&
            comp.password === pass.value
          ) {
            alert("Logged in Successfully!");
            localStorage.setItem("token", JSON.stringify(Date.now()));
            localStorage.setItem("fname", JSON.stringify(comp.fname));
            localStorage.setItem("lname", JSON.stringify(comp.lname));
            window.location.href = "home.html";
          } else {
            alert("Wrong Password or Email or \n You are not registered in!!");
          }
        });
    });
    