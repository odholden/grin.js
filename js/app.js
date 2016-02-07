$(init);

function init() {
  loops = {
    serious: ["Coding Teacher", "Full-Stack Developer"],
    other:   ["Beanies", "Bannoffee Pie", "Burgers", "Fentiman's Ginger Beer",
    "Hitchhiking", "Hot Tubs", "Indie Movies", "Backpacking", "The Economist",
    "Old Cars", "Australia", "Teaching", "Coding", "Theatre"]
  };
  var site = new Site(loops);
  site.checkScroll();
  // loopText();
}

function Site(loops) {
  this.loops         = loops;
  this.currentScroll = 0;
  this.newScroll;
}

Site.prototype.checkScroll = function() {
  $(window).on("scroll", this.detectScroll.bind(this));
}

Site.prototype.detectScroll = function() {
  this.newScroll = $(window).scrollTop();
  if (this.newScroll > this.currentScroll) {
    console.log("scroll down");
  } else {
    console.log("scroll up");
  }
  this.currentScroll = this.newScroll;
}
