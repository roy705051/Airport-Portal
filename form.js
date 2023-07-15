const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const mob = document.getElementById("mob");
const dob = document.getElementById("dob");
var ele = document.getElementsByName("gender");
const state = document.getElementById("state");
const city = document.getElementById("city");
const pin = document.getElementById("pin");
const pass = document.getElementById("pass");
const sub = document.getElementById("sub");
var i = 0,
  gen;
sub.addEventListener("submit", function (event) {
  window.location.assign("./index.html");
  event.preventDefault();
  var select = document.getElementById("country").value;
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      gen = ele[i].value;
      break;
    }
  }
  let dataobj = {
    fname: fname.value,
    lname: lname.value,
    email: email.value,
    mob: mob.value,
    gender: gen,
    dob: dob.value,
    country: select,
    state: state.value,
    city: city.value,
    pin: pin.value,
    password: pass.value,
  };
  fetch("http://localhost:8080/userdata", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataobj),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Account created successfully!");
      
    });
    window.location.replace("signin.html");
});
