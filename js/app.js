window.addEventListener("DOMContentLoaded", init);

function init() {
  // loopText(loops);
  var ollie = new Ollie();
}

function Ollie() {
  this.loops = {
    serious: ["Coding Teacher", "Full-Stack Developer"],
    other:   ["Beanies", "Bannoffee Pie", "Burgers", "Fentiman's Ginger Beer",
    "Hitchhiking", "Hot Tubs", "Indie Movies", "Backpacking", "The Economist",
    "Old Cars", "Australia", "Teaching", "Coding", "Theatre"]
  };
}
