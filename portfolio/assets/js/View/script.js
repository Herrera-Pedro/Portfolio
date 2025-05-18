function nav() {
  var x = document.getElementById("TopNav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topNav";
  }
}