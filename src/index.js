function check(mood, goodCallback, badCallback) {
  if (mood === "good") {
    goodCallback();
  } else {
    badCallback();
  }
}
function dance() {
  console.log("dance");
}
function sing() {
  console.log("sing");
}
function cry() {
  console.log("cry");
}
check("good", sing, cry);
